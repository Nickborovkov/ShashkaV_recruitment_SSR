<template>
  <nav>
    <NuxtLink
      class="navItem"
      custom-exact-active-link="custom-exact-active-link"
      v-for="link in config"
      :key="link.id"
      :to="link.path"
    >
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>

<script>
  import {menuItems} from "../../config/menuItems";

  export default {
    name: "TopbarMenu",
    data() {
      return {
        config: menuItems
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/variables";
  .navItem {
    font-size: 18px;
    text-decoration: none;
    color: #2a2825;
    margin: 0 15px;
    font-weight: 500;
  }
  .custom-exact-active-link {
    color: #92721F;
  }

  @media screen and (max-width: 980px){
    .navItem {
      font-size: 16px;
      margin: 0 10px;
    }
  }
</style>
