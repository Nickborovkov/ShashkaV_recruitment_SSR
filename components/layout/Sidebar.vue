<template>
  <div class="sidebar" :class="{'sidebar-active': showSidebar}">

    <div class="burger" :class="{'burger-active': showSidebar}" @click="$emit('toggle-sidebar')">
      <svg v-if="!showSidebar" style="color: #2a2825" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
           class="bi bi-list"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <svg v-if="showSidebar" style="color: white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
           class="bi bi-x-circle"
           viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>

    <div class="links">
      <div @click="$emit('close-sidebar')">
        <NuxtLink
          class="links__navItem"
          custom-exact-active-link="custom-exact-active-link"
          v-for="link in config"
          :key="link.id"
          :to="link.path"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  import {ContactIcons} from "../../.nuxt/components";
  import {menuItems} from "../../config/menuItems";

  export default {
    name: "Sidebar",
    components: {ContactIcons},
    props: {
      showSidebar: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        config: menuItems
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/main";

  .custom-exact-active-link {
    color: $accent-mustard;
  }

  .burger {
    transition: .1s ease-in;
    width: 40px;
    height: 40px;
    position: fixed;
    top: 0;
    left: 0px;
    -webkit-border-radius: 0 10px 10px 0;
    -moz-border-radius: 0 10px 10px 0;
    border-radius: 0 10px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $base-olive-green;
  }

  .burger-active {
    left: 260px;
    background-color: black;
  }

  .line {
    width: 25px;
    height: 2px;
    display: block;
    margin: auto;
    background-color: white;
  }

  .icons {
    margin: 20px  ;
  }

  .link {
    margin-top: 20px;
    margin-right: 20px;
  }

  .sidebar {
    font-family: "Oranienbaum Regular";
    padding: 50px 0;
    position: fixed;
    z-index: 100;
    left: -300px;
    top: 0;
    width: 300px;
    display: block;
    background-color: black;
    -webkit-border-radius: 0 0 10px 0;
    -moz-border-radius: 0 0 10px 0;
    border-radius: 0 0 10px 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .sidebar-active {
    left: 0px;
  }

  .links {
    margin-left: 30px;
    &__navItem {
      display: block;
      font-size: 20px;
      text-decoration: none;
      color: white;
      font-weight: 500;
      margin: 20px 0;
    }
  }

</style>
