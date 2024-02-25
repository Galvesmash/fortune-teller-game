<template>
  <div
    class="fortune-card"
  >
    <p
      v-if="!fortuneError && (fortuneTranslated || fortune)"
      class="fortune"
    >
      {{ fortuneTranslated || fortune }}
    </p>

    <p
      v-else-if="fortuneError"
      class="fortune error"
    >
      Aconteceu um problema com a máquina.
      Tente novamente mais tarde!
    </p>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapGetters } from 'vuex';

  export default defineComponent({
    name: 'FortuneCard',

    computed: {
      ...mapGetters('fortune_teller/fortune', {
        fortune: 'getFortune',
        fortuneError: 'getFortuneError',
        fortuneTranslated: 'getFortuneTranslated',
      }),
    },
  });
</script>

<style scoped lang="scss">
  .fortune-card {
    background-image: url("@/assets/images/fortune-machine-white-card.jpg");
    align-items: center;
    display: flex;
    height: 625px;
    justify-content: center;
    margin: 0 auto;
    max-height: 625px;
    max-width: 904px;
    width: 904px;

    .fortune {
      flex-grow: 1;
      font-family: specialelite;
      font-size: 28px;
      margin: 0;
      padding: 110px;
      
      &.error {
        color: red;
      }
    }
  }
</style>
