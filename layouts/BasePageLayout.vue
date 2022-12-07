<template>
  <div>
    <app-header/>
    <div class="content">
      <Nuxt/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from "../components/layout/AppHeader";
  import AppFooter from "../components/layout/AppFooter";

  export default {
    name: "BasePageLayout",
    components: {AppHeader, AppFooter}

  }
</script>

<style scoped lang="scss">
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
  }
</style>
