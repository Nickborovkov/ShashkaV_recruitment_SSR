<template>
    <div class="flex-center">
      <div class="description">
        <h3 class="description__name">Шашина Виктория</h3>
        <h3 class="description__job">Карьерный консультант и коуч</h3>
        <h4 class="description__motivation">
          Я точно знаю, что каждый из нас может воплотить все свои
          самые смелые мечты, построить карьеру мечты и жить в
          гармонии с собой и окружающими.
        </h4>
        <h5 class="description__catchphrase">
          Буду рада встретиться с вами на консультации
          Провожу встречи как очно, так и онлайн
        </h5>
      </div>
      <div class="photo__Container">
        <img class="photo" src="/main_avatar.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Greetings"
    }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";
  .description {
    width: 60%;
    padding: 50px 150px 0px 40px;
    box-sizing: border-box;
    &__name {
      font-size: 40px;
      padding-bottom: 30px;
      color: $accent-middle-grey
    }
    &__job {
      font-size: 25px;
      padding-bottom: 60px;
      color: $accent-middle-grey;
    }
    &__motivation {
      text-align: right;
      padding-bottom: 40px;
      color: $accent-dust-rose;
      font-size: 18px;
      font-weight: normal
    }
    &__catchphrase {
      text-align: right;
      padding-bottom: 20px;
      color: $accent-middle-grey;
      font-weight: normal;
      font-size: 18px
    }
  }
  .photo__Container {
    width: 40%;
  }

  .photo {
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    display: block;
    margin: auto;
    width: 90%;
  }
</style>
