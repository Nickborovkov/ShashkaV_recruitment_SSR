<template>
  <div class="header flex-center">
    <div>
      <span class="mdi mdi-check-all"/>
      <span class="mdi mdi-check-all"/>
      <span class="mdi mdi-check-all"/>
    </div>
    <div class="header__inner">
      <topbar-menu/>
    </div>
    <div>
      <span class="mdi mdi-account-box"/>
    </div>
  </div>
</template>

<script>
  import TopbarMenu from "../../UI/navigation/TopbarMenu";

  export default {
    name: "AppHeader",
    components: {TopbarMenu}
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/main";

  .header {
    background-color: $base-pastel-color;
    padding: 20px 0;

    &__inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      font-family: "Montserrat Normal";
    }
  }
</style>
