<template>
  <div>
    <divider text="С чем я работаю"/>

    <div class="flex-between">
      <article class="article">
        <background-video :video="video" width="500"/>
      </article>
      <article class="article">
        <work-format-types/>
      </article>


    </div>
  </div>
</template>

<script>
  import video from "../static/videos/V_gif.mp4"
  import Divider from "../UI/elements/Divider";
  import WorkFormatTypes from "../components/workFormat/WorkFormatTypes";
  import BackgroundVideo from "../UI/elements/BackgroundVideo";

  export default {
    name: "WorkFormat",
    layout: 'BasePageLayout',
    components: {Divider, WorkFormatTypes, BackgroundVideo},
    data() {
      return {
        video: video,
      }
    }
  }
</script>

<style scoped lang="scss">
  .article {
    padding: 0 10px;
  }

  @media screen and (max-width: 1023px){
    .article:first-child {
      display: none;
    }
    .article:last-child {
      width: 100%;
    }
  }
</style>
