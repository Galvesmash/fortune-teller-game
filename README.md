# vue-fortune-teller-game

## This is a WIP project!

## About
Fortune Teller Game, made with Vue 3 and magic.
Standalone project to be included inside my other project (Fortune Machine) or other stuff.
Created by Gabriel Galves Taliatti and Camila de Oliveira Mônaco.

### APIs:
- Fortunecookie by wh-iterabb-it.
- Meowfacts by wh-iterabb-it.

## Project setup
```
npm install --save vue-fortune-teller-game
```
or
```
yarn add vue-fortune-teller-game
```

## Basic Usage
```
//src/main.js
import Vue from "vue";
import FortuneTellerGame from 'v-fortune-teller-game'
Vue.use(FortuneTellerGame);
```
or
```
//src/components/Component.vue
<template>
  <FortuneTellerGame />
</template>

<script>
  import FortuneTellerGame from "v-fortune-teller-game";

  export default {
    components: {
      FortuneTellerGame
    }
  };
</script>
```
