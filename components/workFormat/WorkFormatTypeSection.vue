<template>
  <section class="wrapper">
    <div class="title">
      <h2 v-if="title" class="title__item">{{title}}</h2>
      <h2 v-if="subtitle" class="title__subtitle">( {{ subtitle }} )</h2>
    </div>

    <ul class="list">
      <li class="list__item" style="color: #A2C1AF" v-for="item in workFormatItems" :key="item.id">
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
        required: false
      },
      subtitle: {
        type: String,
        required: false
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
      font-size: 35px;
      color: #A2C1AF
    }
    &__subtitle {
      font-size: 20px;
      color: #999999;
      color: #A2C1AF
    }
  }
  .list {
    margin-left: 70px;
    &__item {
      margin: 20px 0;
      color: $base-olive-green;
      font-size: 20px;
    }
    &__text {
      font-size: 20px;
      color: $accent-middle-grey;
    }
  }

  @media screen and (max-width: 1023px) {
    .wrapper {
      margin-bottom: 20px;
    }

    .title {
      margin-left: 0;
      text-align: center;
      &__item {
        font-size: 25px;
      }
      &__subtitle {
        margin-bottom: 20px;
        font-size: 20px;
      }
    }

    .list {
      width: 70%;
      margin: auto;
      &__item {
        font-size: 20px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .title {
      margin-left: 0;
      font-size: 25px;
      text-align: center;
      &__item {
        font-size: 25px;
      }
    }
    .list {
      width: 80%;
      &__item {
        font-size: 16px;
      }
    }
  }
</style>
