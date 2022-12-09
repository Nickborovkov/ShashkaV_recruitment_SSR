<template>
  <div>

    <banner/>

    <divider />

    <greetings/>

    <div style="padding: 40px 0">
      <h3 style="font-weight: 400; text-align: center; color: #999999">
        У каждого из Вас огромный потенциал для реализации всех Ваших возможностей, <br> а я могу помочь его раскрыть:)
      </h3>
    </div>

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

<style scoped>
  .line {
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }
</style>
