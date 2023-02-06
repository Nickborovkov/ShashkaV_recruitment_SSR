<template>
    <div class="wrapper">
      <div class="description">
        <h3 class="description__name">Шашина Виктория</h3>
        <h3 class="description__job">Карьерный консультант и коуч</h3>
        <h4 class="description__motivation">
          Помогу определить стратегию развития карьеры и получить долгожданный оффер.
          Я точно знаю, что каждый из нас может построить карьеру мечты и эффективно достигать своих целей. Буду рада встретиться с вами
          на консультации Провожу встречи как очно, так и онлайн. <br>
        </h4>
        <h4 class="description__motivation">
          С заботой о Вашем будущем и Вашей карьере ♥
        </h4>
      </div>
      <div class="photo__Container">
        <img class="photo" src="../../static/images/photos/main_avatar.jpg" alt="">
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
  .wrapper {
    display: flex;
    justify-content: center;
  }
  .description {
    width: 60%;
    padding: 10px 150px 0px 40px;
    box-sizing: border-box;
    &__name {
      font-size: 50px;
      font-weight: 900;
      color: $accent-middle-grey
    }
    &__job {
      font-size: 35px;
      padding-bottom: 40px;
      color: $accent-middle-grey;
    }
    &__motivation {
      text-align: center;
      padding-bottom: 30px;
      color: $accent-middle-grey;
      font-size: 22px;
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
  @media screen and (max-width: 1024px){
    .description {
      padding: 30px 100px 0px 30px;
      &__name {
        font-size: 35px;
      }
    }
    .photo__Container {
      width: 35%;
    }
  }
  @media screen and (max-width: 768px){
    .wrapper {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }
    .description {
      width: 100%;
      padding: 30px;
      &__name {
        text-align: center;
      }
      &__description__job {
        text-align: center;
      }
      &__description__motivation {
        text-align: center;
      }
      &__description__catchphrase {
        text-align: center;
      }
    }
    .photo__Container {
      width: 75%;
      margin: auto;
    }
  }
</style>
