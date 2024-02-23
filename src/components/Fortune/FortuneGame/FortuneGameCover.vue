<template>
  <div
    class="fortune-game-cover"
  >
    <img
      alt="Fortune Game Cover"
      class="image"
      src="@/assets/images/crystal_ball_pixel.png"
    >
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'FortuneGameCover',

    data() {
      return {
        loading: false,
      }
    },
  });
</script>

<style scoped lang="scss">
  .fortune-game-cover {
    height: 100%;
    width: 100%;

    .image {
      height: inherit;
      width: 100%;
    }
  }
</style>
