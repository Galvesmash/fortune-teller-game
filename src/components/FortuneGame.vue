<template>
  <div class="fortune-game">
    <div class="menu">
      <h1 class="title">
        {{ t('general.fortune_game') }}
      </h1>

      <h3 class="subtitle">
        {{ t('general.choose_topic') }}
      </h3>

      <a
        v-for="(option, index) in fortuneOptions"
        :class="{ 'disabled': !option.active }"
        :disabled="!option.active"
        :key="index"
        @click="handleFortune(option.value)"
        class="option"
      >
        {{ t(`general.${option.value}`) }}
      </a>
    </div>
      
    <LoadingFortuneCard
      v-if="loadingFortune"
    />

    <ModalTemplate
      v-if="!loadingFortune && showFortuneAnswerModal"
      @click="closeCard"
    >
      <FortuneCard />
    </ModalTemplate>
  </div>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { storeToRefs } from 'pinia'
  import { useGeneralStore, useFortuneStore } from '@/store'

  interface Props {
    locale?: string
  }

  const LoadingFortuneCard = defineAsyncComponent(() => import('./LoadingFortuneCard'))
  const FortuneCard = defineAsyncComponent(() => import('./FortuneCard'))
  const ModalTemplate = defineAsyncComponent(() => import('./ModalTemplate'))

  const props = withDefaults(defineProps<Props>(), {
    locale: 'en'
  })

  const { t, locale } = useI18n()

  const fortuneStore = useFortuneStore()
  const generalStore = useGeneralStore()

  const { defaultLocale } = storeToRefs(generalStore)
  const { fortune, fortuneOptions, getFortuneRandomOption } = storeToRefs(fortuneStore)

  const resetFortune = fortuneStore.resetFortune
  const setFortuneOptions = fortuneStore.setFortuneOptions
  // const setFortuneRandomOption = fortuneStore.setFortuneRandomOption
  const setLocale = generalStore.setLocale

  const loadingFortune = ref(false)
  const showFortuneAnswerModal = ref(false)

  function handleFortune(theme: string | null = null) {
    if (!theme || loadingFortune.value) return

    resetFortune()

    loadingFortune.value = true

    // setFortuneRandomOption(fortune)
    setTimeout(() => {
      showFortuneAnswerModal.value = true
      loadingFortune.value = false
    }, 3000)
  }

  function closeCard() {
    showFortuneAnswerModal.value = false
  }

  locale.value = props.locale || defaultLocale.value
  setLocale(locale.value)

  setFortuneOptions([
    {
      id: 1,
      active: true,
      value: 'random'
    },
    {
      id: 2,
      active: false,
      value: 'love'
    },
    {
      id: 3,
      active: false,
      value: 'friends'
    },
    {
      id: 4,
      active: false,
      value: 'money'
    }
  ])
</script>

<style scoped lang="scss">
  $monitor-on-color-dark: #140C1C;
  $text-color-dark: #DEEED6;

  .fortune-game {
    background-color: $monitor-on-color-dark;
    height: calc(100% - 8em);
    max-height: calc(100% - 8em);
    max-width: calc(100% - 16em);
    padding: 4em 8em;
    position: relative;
    width: calc(100% - 16em);

    .menu {
      color: $text-color-dark;
      font-family: vcrosdmono;
      text-align: initial;
      text-transform: uppercase;

      .option {
        cursor: pointer;
        display: flex;

        &.disabled {
          cursor: initial;
          opacity: .5;
          pointer-events: none;
        }

        &:hover {
          font-weight: bold;

          &::before {
            content: "> ";
            white-space: pre-wrap;
          }
        }
      }
    }
  }
</style>
