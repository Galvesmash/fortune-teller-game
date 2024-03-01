<template>
  <div
    class="fortune-game"
  >
    <div
      class="menu"
    >
      <h1
        class="title"
      >
        {{ $t('general.fortune_game') }}
      </h1>

      <h3
        class="subtitle"
      >
        {{ $t('general.choose_topic') }}
      </h3>

      <a
        v-for="(option, index) in fortuneOptions"
        :class="{ 'disabled': !option.active }"
        :disabled="!option.active"
        :key="index"
        @click="handleFortune(option.value)"
        class="option"
      >
        {{ $t(`general.${option.value}`) }}
      </a>
    </div>
      
    <LoadingFortuneCard
      v-if="loadingFortune"
    />

    <ModalTemplate
      v-if="!loadingFortune && showFortuneAnswerModal"
      @click="closeCard"
    >
      <FortuneCard />
    </ModalTemplate>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters, mapMutations } from 'vuex';
  import LoadingFortuneCard from './LoadingFortuneCard.vue';
  import FortuneCard from './FortuneCard.vue';
  import ModalTemplate from './ModalTemplate.vue';
  import {useI18n} from 'vue-i18n';
  import { registerOrCreateStore } from '../static/js/helpers.js';
  import FortuneTellerStore from '../store/fortune_teller';

  export default defineComponent({
    name: 'FortuneGame',

    components: {
      LoadingFortuneCard,
      FortuneCard,
      ModalTemplate,
    },

    props: {
      locale: {
        type: String
      },
      rapidApiKey: {
        type: String,
        required: true
      }
    },

    data() {
      return {
        loadingFortune: false,
        showFortuneAnswerModal: false,
      }
    },

    beforeCreate() {
      registerOrCreateStore(this, 'fortune_teller', FortuneTellerStore);
    },

    created() {
      this.$i18n.locale = this.locale || this.getDefaultLocale;
      this.setLocale(this.locale || this.getDefaultLocale);

      if (this.rapidApiKey) {
        this.setRapidApiKeyFortune(this.rapidApiKey);
        this.setRapidApiKeyGeneral(this.rapidApiKey);
      }

      this.setFortuneOptions([
        {
          id: 1,
          active: true,
          value: 'random',
        },
        {
          id: 2,
          active: false,
          value: 'love',
        },
        {
          id: 3,
          active: false,
          value: 'friends',
        },
        {
          id: 4,
          active: false,
          value: 'money',
        },
      ]);
    },

    methods: {
      ...mapActions('fortune_teller/fortune', [
        'getFortune',
      ]),

      ...mapActions('fortune_teller/general', [
        'translate',
      ]),

      ...mapMutations('fortune_teller/fortune', {
        resetFortune: 'reset',
        setFortuneError: 'setFortuneError',
        setFortuneOptions: 'setFortuneOptions',
        setFortuneTranslated: 'setFortuneTranslated',
        setRapidApiKeyFortune: 'setRapidApiKeyFortune',
      }),

      ...mapMutations('fortune_teller/general', [
        'setLocale',
        'setRapidApiKeyGeneral',
      ]),

      handleFortune(theme = null) {
        if (!theme || this.loadingFortune) return;

        // Reset Fortune in store
        this.resetFortune();

        this.loadingFortune = true;

        /* TODO: Change later to validate theme and get correct fortune */
        this.getFortune().then(() => {
          if (this.getLocale != this.getDefaultLocale) {
            // Translate text if "locale" isn't english (Default locale)
            this.translateText();
          } else {
            // Show card modal with Fortune
            this.showFortuneAnswerModal = true;
            this.loadingFortune = false;
          }
        }).catch((error) => {
          console.error(error);
          // Show card modal with Error Message
          this.showFortuneAnswerModal = true;
          this.loadingFortune = false;
        });
      },

      translateText() {
        const payload = {
          text: this.fortune,
          target: this.getLocale
        };

        this.translate(payload).then((response) => {
          this.setFortuneTranslated(response);
        }).catch((error) => {
          console.error(error);
          this.setFortuneTranslated('');
        }).finally(() => {
          // Show card modal with Fortune or Error Message
          this.showFortuneAnswerModal = true;
          this.loadingFortune = false;
        });
      },

      closeCard() {
        this.showFortuneAnswerModal = false;
      },
    },

    computed: {
      ...mapGetters('fortune_teller/fortune', {
        fortune: 'getFortune',
        fortuneOptions: 'getFortuneOptions',
      }),

      ...mapGetters('fortune_teller/general', [
        'getAvailableLocales',
        'getDefaultLocale',
        'getLocale',
      ]),
    },
  });
</script>

<style scoped lang="scss">
  $monitor-on-color-dark: #140C1C;
  $text-color-dark: #DEEED6;

  .fortune-game {
    background-color: $monitor-on-color-dark;
    height: calc(100% - 8em);
    max-height: calc(100% - 8em);
    max-width: calc(100% - 16em);
    padding: 4em 8em;
    position: relative;
    width: calc(100% - 16em);

    .menu {
      color: $text-color-dark;
      font-family: vcrosdmono;
      text-align: initial;
      text-transform: uppercase;

      .option {
        cursor: pointer;
        display: flex;

        &.disabled {
          cursor: initial;
          opacity: .5;
          pointer-events: none;
        }

        &:hover {
          font-weight: bold;

          &::before {
            content: "> ";
            white-space: pre-wrap;
          }
        }
      }
    }
  }
</style>
