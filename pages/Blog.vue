<template>
  <div>
    <divider text="Полезная информация"/>

    <div class="posts">
      <NuxtLink
        style=""
        :to="`/blog/${post.id}`"
        class="post"
        v-for="post in posts"
        :key="post.id"
      >
        <div>
          <img class="post__image" :src="post.image" alt="blog_image">
        </div>
        <div class="post__text">
          <h3 class="post__title">
            {{post.title}}
          </h3>
          <p class="post__description">{{post.description}}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import Divider from "../UI/elements/Divider";
  import {posts} from "../helpers/Blog";


  export default {
    name: "Blog",
    layout: 'BasePageLayout',
    components: { Divider },
    data() {
      return {
        posts: posts
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "assets/scss/main";
  .posts {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .post {
    width: 350px;
    margin: 20px 10px;
    box-sizing: border-box;
    text-decoration: none;
    transition: 0.5s;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    &__text {
      padding: 10px;
    }
    &__title {
      text-decoration: none;
      color: #2a2825;
      padding: 10px 0;
      text-transform: uppercase;
      letter-spacing: 1px
    }
    &__image {
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
      width: 100%;
      display: block;
      margin: auto;
    }
    &__description {
      color: $accent-middle-grey;
    }
    &:hover {
      transform: scale(1.02,1.02);
      box-shadow: 2px 2px 5px #dddddd, -2px -2px 5px #dddddd;
    }
  }
</style>
