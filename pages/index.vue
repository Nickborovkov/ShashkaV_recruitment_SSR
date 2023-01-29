<template>
  <div>

    <banner class="banner"/>
    <divider class="banner" />

    <greetings class="greetings"/>

    <h3 class="text">
      С заботой о Вашем будущем и Вашей карьере ❤️
    </h3>

  </div>
</template>

<script>
  import Greetings from "../components/main/Greetings";
  import Banner from "../components/main/Banner";
  import Divider from "../UI/elements/Divider";

  export default {
    name: 'IndexPage',
    components: {Banner, Greetings, Divider},
    layout: 'BasePageLayout',
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";
  .text {
    margin-top: 100px;
    font-weight: 400;
    text-align: center;
    color: $base-gold;
    font-size: 25px;
    padding: 0 10px;
  }

  @media screen and (max-width: 830px){
    .banner {
      display: none;
    }
    .greetings {
      margin-top: 30px;
    }
    .text {
      margin-top: 50px;
      font-size: 20px;
    }
  }
</style>
