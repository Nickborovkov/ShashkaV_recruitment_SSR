<template>
    <div v-if="modal" class="layout" @click="$emit('close-modal')">
      <div class="inner">
        <slot style="width: 100%;"></slot>
      </div>
    </div>
</template>

<script>
    export default {
        name: "AppModal",
        props: {
          modal: {
            type: Boolean,
            required: true
          }
        }
    }
</script>

<style scoped lang="scss">
  .layout {
    z-index: 10000;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,.5);
  }
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
  }
</style>
