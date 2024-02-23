<template>
  <div
    class="home"
  >
    <FortuneGame />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import FortuneGame from '@/components/Fortune/FortuneGame/FortuneGame.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      FortuneGame,
    },

  });
</script>

<style scoped lang="scss">
  $monitor-on-color-dark: #140C1C;

  .home {
    background-color: $monitor-on-color-dark;
    height: calc(100% - 30px);
    overflow: hidden;
    padding: 15px;
  }
</style>
