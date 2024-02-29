# vue-fortune-teller-game

## This is a WIP project!

## About
Fortune Teller Game, made with Vue 3 and magic.
Standalone project to be included inside my other project (Fortune Machine) or other stuff.
Created by Gabriel Galves Taliatti and Camila de Oliveira Mônaco.

### APIs:
- Fortune Cookie by wh-iterabb-it. (https://rapidapi.com/wh-iterabb-it-wh-iterabb-it-default/api/fortune-cookie4/)
- OpenTranslator by falcondsp. (https://rapidapi.com/falcondsp/api/opentranslator)

## Project setup
```
npm install --save fortune-teller-game
```
or
```
yarn add fortune-teller-game
```

## Basic Usage
```
//src/main.js
import Vue from "vue";
import FortuneTellerGame from 'fortune-teller-game';
Vue.use(FortuneTellerGame);
```
or
```
//src/components/Component.vue
<template>
  <FortuneTellerGame />
</template>

<script>
  import FortuneTellerGame from "fortune-teller-game";

  export default {
    components: {
      FortuneTellerGame
    }
  };
</script>
```
