# fortune-teller-game

## This is a WIP project!

## About
Fortune Teller Game, made with Vue 3 and magic.
Standalone project to be included inside my other project (Fortune Machine) or other stuff.
Created by Gabriel Galves Taliatti and Camila de Oliveira Mônaco.

## GitHub Page
https://galvesmash.github.io/Fortune-Teller-Game/

## NPM Page
https://www.npmjs.com/package/fortune-teller-game

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
//src/components/YourComponent.vue
<template>
  <FortuneTellerGame
    :locale="defaultLocale"
    :rapid-api-key="rapidApiKey"/>
</template>

<script>
  import FortuneTellerGame from "fortune-teller-game";

  export default {
    components: {
      FortuneTellerGame
    },

    data() {
      return {
        defaultLocale: 'pt-br',
        rapidApiKey: 'your-rapid-api-key', // Required
      }
    },
  };
</script>
```
