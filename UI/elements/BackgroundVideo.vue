<template>
  <video
    id="video_background"
    class="video"
    preload="auto"
    no-controls
    autoplay
    loop
    playsinline
    muted
    :width="width"
    :src="video"
  />
</template>

<script>
    export default {
        name: "BackgroundVideo",
      props: {
        video: {
          type: String,
          required: true
        },
        width: {
          type: String,
          required: true
        }
      }
    }
</script>

<style scoped lang="scss">
  .video {
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
  }
</style>
