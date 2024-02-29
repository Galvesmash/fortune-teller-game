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
        :disable="option.active"
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
  import { registerOrCreateStore } from '@/static/js/helpers.js'
  import FortuneTellerStore from '@/store/fortune_teller'

  export default defineComponent({
    name: 'FortuneGame',

    components: {
      LoadingFortuneCard,
      FortuneCard,
      ModalTemplate,
    },

    props: {
      locale: String,
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
      this.setLocale(this.locale || 'pt-br');

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

      ...mapMutations('fortune_teller/fortune', [
        'setFortuneError',
        'setFortuneOptions',
        'setFortuneTranslated',
        'setRapidApiKeyFortune',
      ]),

      ...mapMutations('fortune_teller/general', [
        'setLocale',
        'setRapidApiKeyGeneral',
      ]),

      handleFortune(theme = null) {
        if (!theme || this.loadingFortune) return;

        this.loadingFortune = true;

        /* TODO: Change later to validate theme and get correct fortune */
        this.getFortune().then(() => {
          this.translateText();
        }).catch((error) => {
          console.error(error);
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
    width: calc(100% - 16em);

    .menu {
      color: $text-color-dark;
      font-family: vcrosdmono;
      text-align: initial;
      text-transform: uppercase;

      .title {
      }

      .subtitle {
      }

      .option {
        cursor: pointer;
        display: flex;

        &:hover {
          font-weight: bold;

          &::before {
            content: "> ";
          }
        }
      }
    }
  }
</style>
