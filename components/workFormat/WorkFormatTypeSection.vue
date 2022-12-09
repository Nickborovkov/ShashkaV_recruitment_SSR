<template>
  <section class="wrapper">
    <div class="title">
      <h2 class="title__item">{{title}}</h2>
      <h2 class="title__subtitle">( {{ subtitle }} )</h2>
    </div>

    <ul class="list">
      <li class="list__item" v-for="item in workFormatItems" :key="item.id">
        <span class="list__text">{{ item.description }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "WorkFormatTypeSection",
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      workFormatItems: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";
  .wrapper {
    margin-bottom: 50px;
  }
  .title {
    margin-left: 40px;
    &__item {
      font-size: 25px;
      color: $accent-dust-rose
    }
    &__subtitle {
      font-size: 16px;
      color: #999999;
      color: $accent-dust-rose
    }
  }
  .list {
    margin-left: 100px;
    &__item {
      margin: 10px 0; color: #d39999; font-size: 25px;
    }
    &__text {
      font-size: 16px;
      color: $accent-middle-grey;
    }
  }
</style>
