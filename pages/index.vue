<template>
  <div>
    <banner class="banner"/>

    <divider />

    <greetings class="greetings"/>
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

  @media screen and (max-width: 830px){
    .banner {
      display: none;
    }
    .greetings {
      margin-top: 70px;
    }
    .text {
      margin-top: 50px;
      font-size: 20px;
    }
  }
</style>
