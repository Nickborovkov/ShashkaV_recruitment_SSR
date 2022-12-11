<template>
  <div>
    <divider :text="definePost.title"/>

    <app-button type="link" to="/Blog"><span class="mdi mdi-arrow-left" /></app-button>

    <div>
      <img style="display: block; margin: auto; width: 70%; -webkit-border-radius: 20px;-moz-border-radius: 20px;border-radius: 20px;" :src="definePost.imageh" alt="">
    </div>

    <div style="margin-top: 30px;">
      <div style="margin-bottom: 30px;">
        <div style="display: block; width: 80%; margin: auto" v-html="definePost.text1"></div>
      </div>
      </div>
    </div>
</template>

<script>
  import blog1 from '@/assets/images/blog/horizontal/blog1.jpg'
  import blog2 from '@/assets/images/blog/horizontal/blog2.jpg'
  import blog3 from '@/assets/images/blog/horizontal/blog3.jpg'
  import blog4 from '@/assets/images/blog/horizontal/blog4.jpg'
  import blog5 from '@/assets/images/blog/horizontal/blog5.jpg'
  import blog6 from '@/assets/images/blog/horizontal/blog6.jpg'
  import blog7 from '@/assets/images/blog/horizontal/blog7.jpg'
  import blog8 from '@/assets/images/blog/horizontal/blog8.jpg'
  import blog9 from '@/assets/images/blog/horizontal/blog9.jpg'
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
    created() {
      window.scrollTo(0, 0)
    },
  }
</script>

<style scoped>
  .line {
    width: 100%;
    height: 1px;
    margin-top: 13px;
    background-color: #cccccc;
  }

  .backButton {
    font-size: 30px;
    background-color: #d39999;
    border: none;
    color: white;
    width: 100px;
    transition: .5s;
  }

  .backButton:hover {
    background-color: #000000;
  }
</style>
