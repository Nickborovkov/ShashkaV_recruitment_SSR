<template>
  <div>
    <divider text="Формат работы"/>

    <div class="flex-center">
      <background-video :video="video" width="550"/>

      <work-format-types/>
    </div>
  </div>
</template>

<script>
  import video from "../assets/videos/V_gif.mp4"
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
