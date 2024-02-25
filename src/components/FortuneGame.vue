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
        Jogo do Futuro
      </h1>

      <h3
        class="subtitle"
      >
        Escolha um tópico para prever o futuro.
      </h3>

      <a
        v-for="(option, index) in fortuneOptions"
        :key="index"
        @click="handleFortune(option.value)"
        class="option"
      >
        {{ option.translate }}
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

  export default defineComponent({
    name: 'FortuneGame',

    components: {
      LoadingFortuneCard,
      FortuneCard,
      ModalTemplate,
    },

    data() {
      return {
        loadingFortune: false,
        showFortuneAnswerModal: false,
      }
    },

    created() {
      this.setFortuneOptions([
        {
          translate: 'Amor',
          value: 'love',
        },
        {
          translate: 'Amigos',
          value: 'friends',
        },
        {
          translate: 'Dinheiro',
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
          target: 'pt-br'
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
    },
  });
</script>

<style scoped lang="scss">
  $monitor-on-color-dark: #140C1C;
  $text-color-dark: #DEEED6;

  .fortune-game {
    background-color: $monitor-on-color-dark;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    padding: 4em 8em;
    width: 100%;

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