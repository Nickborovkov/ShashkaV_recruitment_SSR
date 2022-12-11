<template>
  <div>
    <app-header/>

    <app-button type="button" v-if="showUpButton" class="up__button" @click="goUp">
      <span class="mdi mdi-arrow-up"/>
    </app-button>

    <div class="content">
      <Nuxt/>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  import AppHeader from "../components/layout/AppHeader";
  import AppFooter from "../components/layout/AppFooter";
  import AppButton from "../UI/forms/AppButton";

  export default {
    name: "BasePageLayout",
    components: {AppHeader, AppFooter, AppButton},
    data() {
      return {
        showUpButton: false
      }
    },
    created() {
      if (process.browser) {
        window.addEventListener(`scroll`, () => {
          if (window.pageYOffset > 600) {
            this.showUpButton = true;
          } else {
            this.showUpButton = false;
          }
        });
      }
    },
    methods: {
      goUp() {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }

  }
</script>

<style scoped lang="scss">
  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
    font-family: "Montserrat Normal";
  }

  .up__button {
    position: fixed;
    bottom: 100px;
    right: 100px;
  }
</style>
