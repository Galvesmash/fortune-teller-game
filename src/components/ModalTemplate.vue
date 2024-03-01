<template>
  <transition
    name="modal"
  >
    <div
      v-if="show"
      class="modal-mask"
      @click="$emit('handleClose')"
    >
      <div
        class="modal-wrapper"
      >
        <div
          class="modal-container"
        >
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ModalTemplate',

    props: {
      handleClose: Function,
    },

    data() {
      return {
        show: true,
      }
    },
  });
</script>

<style scoped lang="scss">
  $monitor-on-color-dark: #140C1C;

  .modal-mask {
    position: absolute;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #140C1C;
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    // 
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
