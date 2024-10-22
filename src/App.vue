<template>
  <FortuneTellerGame :locale="defaultLocale" />
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'

  const FortuneTellerGame = defineAsyncComponent(() => import('./index'))

  const defaultLocale = ref(process.env.VUE_APP_DEFAULT_LOCALE)
</script>

<style lang="scss">
  #app {
    color: #2c3e50;
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    height: 100vh;
    margin: 0;
    overflow: hidden;
    width: 100vw;
  }

  img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }

  nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .prevent-select {
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }
</style>
