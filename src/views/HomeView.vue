<template>
  <div
    class="home"
  >
    <FortuneTellerGame />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // eslint-disable-next-line
  //import FortuneTellerGame from "@/index";
  import FortuneTellerGame from '@/components/Fortune/FortuneGame/FortuneGame.vue';

  export default defineComponent({
    name: 'HomeView',

    components: {
      FortuneTellerGame,
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
