<template>
  <div>
    <divider text="Мой блог: полезная информация"/>

    <div class="posts">
      <NuxtLink
        style="text-decoration: none; transition: 0.5s; -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;"
        :to="`/blog/${post.id}`"
        class="post"
        v-for="post in posts"
        :key="post.id"
      >
        <div style="position: relative">
          <img style="-webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;" class="post__image" :src="post.image" alt="blog_image">
<!--          <div class="post__tags">-->
<!--            <p class="post__tag" v-for="tag in post.tags" :key="tag + randomId">{{tag}}</p>-->
<!--          </div>-->
        </div>
        <div style="padding: 10px;">
          <h3 class="post__title">
            {{post.title}}
          </h3>
          <p style="color: #999999">{{post.description}}</p>
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

<style scoped>
  .posts{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .post{
    width: 350px;
    margin: 20px 10px;
    box-sizing: border-box;
  }
  .post:hover{
    transform: scale(1.02,1.02);
    box-shadow: 2px 2px 5px #dddddd, -2px -2px 5px #dddddd;
  }
  .post__title{
    text-decoration: none;
    color: #2a2825;
    padding: 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px
  }
  .post__image{
    width: 100%;
    display: block;
    margin: auto;
  }
  .post__tags{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
  }
  .post__tag{
    background-color: #c2b599;
    padding: 3px 8px;
    color: #ffffff;
  }
  .post__tag:not(:first-child){
    margin-left: 8px;
  }
  .line{
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }
</style>
