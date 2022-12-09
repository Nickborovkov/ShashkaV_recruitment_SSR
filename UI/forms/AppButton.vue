<template>
  <div>
    <button class="button" v-if="type === 'button'" @click="$emit('click')">
      <slot />
    </button>

    <NuxtLink class="button" v-if="type === 'link'" :to="`${to}`">
      <slot />
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    name: "AppButton",
    props: {
      type: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: false,
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";
  .button{
    text-decoration: none;
    background-color: $accent-dust-rose;
    color: #ffffff;
    padding: 10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    transition: .4s;
    &:hover {
      background-color: #000000;
    }
  }
</style>
