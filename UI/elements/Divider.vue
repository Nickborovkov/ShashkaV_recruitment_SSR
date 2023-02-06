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
    padding: 40px 0;

    &__line {
      width: 100%;
      height: 1px;
      margin-top: 18px;
      background-color: $base-light-grey;
    }

    &__text {
      font-weight: 500;
      font-size: 35px;
      font-weight: bold;
      text-align: center;
      padding: 0 30px;
      white-space: nowrap;
      color: #92721F;
    }
    &__simple {
      margin: 40px 0;
      width: 100%;
      height: 1px;
      background-color: $base-light-grey;
    }
  }

  @media screen and (max-width: 1024px) {
    .divider {
      margin: 30px 0;
      padding: 30px 0;
      &__simple {
        margin: 40px 0;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .divider {
      margin: 20px 0;
      padding: 20px 0;
      &__simple {
        margin: 30px 0;
      }
    }
  }

  @media screen and (max-width: 425px) {
    .divider {
      margin: 20px 0;
      &__text {
        font-size: 20px;
      }
      &__simple {
        margin: 20px 0;
      }
    }
  }
</style>
