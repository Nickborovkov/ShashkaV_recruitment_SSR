<template>
  <div>
    <div v-if="text" class="divider flex-center">
        <aside class="divider__line"></aside>
        <section class="divider__text">
          <span style="font-weight: bold">·</span>
          {{ text }}
          <span style="font-weight: bold">·</span>
        </section>
        <aside class="divider__line"></aside>
    </div>
    <div v-else class="divider__simple"></div>
  </div>
</template>

<script>
  export default {
    name: "Divider",
    props: {
      text: {
        type: String,
        required: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";

  .divider {
    padding: 50px 0;

    &__line {
      width: 100%;
      height: 1px;
      margin-top: 15px;
      background-color: $base-light-grey;
    }

    &__text {
      font-weight: 500;
      font-size: 25px;
      font-weight: bold;
      text-align: center;
      padding: 0 30px;
      white-space: nowrap;
      color: $accent-dust-rose;
    }
    &__simple {
      margin: 50px 0;
      width: 100%;
      height: 1px;
      background-color: $base-light-grey;
    }
  }
</style>
