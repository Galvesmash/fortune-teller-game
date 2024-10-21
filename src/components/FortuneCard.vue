<template>
  <div class="fortune-card">
    <p v-if="!fortuneError && (fortuneTranslated || fortune)" class="fortune">
      {{ fortuneTranslated || fortune }}
    </p>

    <p v-else-if="fortuneError" class="fortune error">
      {{ $t('general.fortune_machine_error') }}
      {{ $t('general.try_again_later') }}
    </p>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useFortuneStore } from '@/store'

  const fortuneStore = useFortuneStore()
  const { fortune, fortuneError, fortuneTranslated } = storeToRefs(fortuneStore)
</script>

<style scoped lang="scss">
  .fortune-card {
    background-image: url("@/assets/images/fortune-machine-white-card.jpg");
    align-items: center;
    display: flex;
    height: 625px;
    justify-content: center;
    margin: 0 auto;
    max-height: 625px;
    max-width: 904px;
    width: 904px;

    .fortune {
      flex-grow: 1;
      font-family: specialelite;
      font-size: 28px;
      margin: 0;
      padding: 110px;
      
      &.error {
        color: red;
      }
    }
  }
</style>
