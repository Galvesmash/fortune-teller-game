# fortune-teller-game

## About
Fortune Teller Game is still a work in progress and it's being made with love and sorcery.
This project is being developed with JavaScript, TypeScript and Vue.js.
Standalone project to be included as [NPM package](https://www.npmjs.com/package/fortune-teller-game) inside our other project, [Fortune Machine](https://github.com/Galvesmash/fortune-machine?tab=readme-ov-file#fortune-machine), or maybe other projects.

Created by Gabriel Galves Taliatti and Camila de Oliveira Mônaco.

## GitHub Page
- [Repository](https://galvesmash.github.io/Fortune-Teller-Game/)
- [NPM package](https://www.npmjs.com/package/fortune-teller-game)

### APIs:
- [Fortune Cookie by wh-iterabb-it](https://rapidapi.com/wh-iterabb-it-wh-iterabb-it-default/api/fortune-cookie4/)
- [OpenTranslator by falcondsp](https://rapidapi.com/falcondsp/api/opentranslator)

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
