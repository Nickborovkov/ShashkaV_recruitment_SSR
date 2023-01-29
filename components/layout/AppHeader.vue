<template>
  <div>
    <div class="header desctop flex-evenly">
      <contact-icons iconSize="20"/>

      <topbar-menu/>

      <div class="link">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-in-right"
             viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
          <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
      </div>
    </div>
    <div class="header mobile flex-end-line">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import TopbarMenu from "../../UI/navigation/TopbarMenu";
  import {ContactIcons} from "../../.nuxt/components";

  export default {
    name: "AppHeader",
    components: { TopbarMenu, ContactIcons }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/main";

  .header {
    background-color: $base-pastel-color;
    padding: 20px 0;
    font-family: "Montserrat Normal";
  }
  .link{
    text-decoration: none;
    color: $accent-middle-grey;
    margin: 0 10px;
  }
  .mobile {
    padding: 20px;
    display: none;
  }
  @media screen and (max-width: 900px){
    .desctop {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
</style>
