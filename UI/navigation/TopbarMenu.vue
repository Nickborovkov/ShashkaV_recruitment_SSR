<template>
  <nav>
    <NuxtLink
      class="navItem"
      v-for="link in config"
      :key="link.id"
      :to="link.path"
    >
      {{ link.name }}
    </NuxtLink>
  </nav>
</template>

<script>
  export default {
    name: "TopbarMenu",
    data() {
      return {
        config: [
          {id: 0, name: 'Главная', path: '/'},
          {id: 1, name: 'Обо мне', path: '/aboutMe'},
          {id: 2, name: 'С чем я работаю', path: '/workWith'},
          {id: 3, name: 'Формат работы', path: '/workFormat'},
          {id: 4, name: 'Блог', path: '/blog'},
          {id: 5, name: 'Контакты', path: '/contacts'},
        ]
      }
    }
  }
</script>

<style scoped>
  .navItem {
    font-size: 16px;
    text-decoration: none;
    color: #2a2825;
    margin: 0 15px;
    font-weight: 500;
  }
</style>
