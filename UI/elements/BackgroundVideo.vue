<template>
  <div>
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
  </div>
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
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
  }
</style>
