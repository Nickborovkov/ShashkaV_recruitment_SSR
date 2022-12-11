<template>
  <div>

    <banner/>

    <divider />

    <greetings/>

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
  }
</style>
