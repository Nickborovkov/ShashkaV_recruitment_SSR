<template>
  <div style="margin-top: 80px;">
    <div>
      <img class="post__img" :src="definePost.imageh" alt="post__img">
    </div>

<!--    <div style="padding: 20px">-->
<!--      <app-button type="link" to="/Blog"><span class="mdi mdi-arrow-left" /></app-button>-->
<!--    </div>-->

    <h3 class="post__title">{{definePost.title}}</h3>

    <div class="post__text">
        <div v-html="definePost.text1" />
      </div>
    </div>
</template>

<script>
  import {posts} from "../../helpers/Blog";
  import Divider from "../../UI/elements/Divider";
  import AppButton from "../../UI/forms/AppButton";


  export default {
    name: "_post",
    layout: 'BasePageLayout',
    components: { Divider, AppButton },
    data() {
      return {
        postId: this.$route.params.post,
        posts: posts
      }
    },
    computed: {
      definePost() {
        return this.posts.find(item => item.id === +this.postId)
      }
    },
  }
</script>

<style scoped lang="scss">
 @import "assets/scss/main";
  .post {
    &__img{
      display: block;
      margin: auto;
      width: 70%;
      -webkit-border-radius: 20px;
      -moz-border-radius: 20px;
      border-radius: 20px;
    }
    &__text {
      width: 80%;
      margin: auto;
      padding: 20px;
      font-family: "Calibri Light";
    }
    &__title {
      text-align: center;
      font-size: 30px;
      color: $accent-mustard;
    }
  }

  @media screen and (max-width: 768px){
    .post {
      &__img {
        width: 95%;
      }
      &__title {
        font-size: 25px;
      }
    }
  }
</style>
