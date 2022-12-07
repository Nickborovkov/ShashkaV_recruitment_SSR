<template>
  <div class="header test">
    <div class="header__inner">
      <topbar-menu />
    </div>
  </div>
</template>

<script>
  import TopbarMenu from "../../UI/navigation/TopbarMenu";

  export default {
    name: "AppHeader",
    components: { TopbarMenu }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/main";
  .header {
    background-color: $base-pastel-color;
    padding: 20px 0;
    &__inner{
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
