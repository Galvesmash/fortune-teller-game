<template>
  <div
    class="loading-fortune-card"
  >
    <div
      class="content"
    >
      <img
        alt="Fortune teller hand left top image"
        class="image hand-left-top"
        src="@/assets/images/fortune-teller-loading/hand-left-top.png"
      >

      <img
        alt="Fortune teller hand right top image"
        class="image hand-right-top"
        src="@/assets/images/fortune-teller-loading/hand-right-top.png"
      >

      <img
        alt="Fortune teller black hole image"
        class="image black-hole"
        src="@/assets/images/fortune-teller-loading/black-hole.png"
      >

      <img
        alt="Fortune teller crystal ball image"
        class="image crystal-ball"
        src="@/assets/images/fortune-teller-loading/crystal-ball.png"
      >

      <img
        alt="Fortune teller hand left bottom image"
        class="image hand-left-bottom"
        src="@/assets/images/fortune-teller-loading/hand-left-bottom.png"
      >

      <img
        alt="Fortune teller hand right bottom image"
        class="image hand-right-bottom"
        src="@/assets/images/fortune-teller-loading/hand-right-bottom.png"
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'LoadingFortuneCard',
  });
</script>

<style scoped lang="scss">
  $background-light: #F7F7F7;
  $background-dark: #140C1C;

  .loading-fortune-card {
    -moz-animation: fadeIn 1s;
    -webkit-animation: fadeIn 1s;
    -o-animation: fadeIn 1s;
    align-items: center;
    animation: fadeIn 1s;
    // background-color: $background-light;
    background-color: $background-dark;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;

    .content {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 600px;
      position: relative;
      width: 800px;

      .image {
        position: absolute;

        &.hand-left-top {
          -moz-animation: leftHand 5s;
          -webkit-animation: leftHand 5s;
          -o-animation: leftHand 5s;
          animation: leftHand 5s;
          animation-fill-mode: backwards;
          animation-iteration-count: infinite;
          left: 0;
          z-index: 106;
        }

        &.hand-right-top {
          -moz-animation: rightHand 5s;
          -webkit-animation: rightHand 5s;
          -o-animation: rightHand 5s;
          animation: rightHand 5s;
          // animation-delay: .4s;
          animation-iteration-count: infinite;
          right: 0;
          z-index: 105;
        }

        &.black-hole {
          -moz-animation: blackHole 1s;
          -webkit-animation: blackHole 1s;
          -o-animation: blackHole 1s;
          animation: blackHole 1s;
          animation-iteration-count: infinite;
          opacity: .8;
          z-index: 104;
        }

        &.crystal-ball {
          z-index: 103;
        }

        &.hand-left-bottom {
          -moz-animation: leftHand 5s;
          -webkit-animation: leftHand 5s;
          -o-animation: leftHand 5s;
          animation: leftHand 5s;
          animation-fill-mode: backwards;
          animation-iteration-count: infinite;
          left: 0;
          z-index: 102;
        }

        &.hand-right-bottom {
          -moz-animation: rightHand 5s;
          -webkit-animation: rightHand 5s;
          -o-animation: rightHand 5s;
          animation: rightHand 5s;
          // animation-delay: .4s;
          animation-iteration-count: infinite;
          right: 0;
          z-index: 101;
        }
      }
    }
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes blackHole {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes leftHand {
    from { transform: rotate(0deg) translateX(-70px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(-70px) rotate(-360deg); }
  }

  @keyframes rightHand {
    from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
    to { transform: rotate(-360deg) translateX(70px) rotate(360deg); }
  }
</style>
