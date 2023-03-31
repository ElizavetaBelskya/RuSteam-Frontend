<template>
  <div class="video-container">
    <iframe :src="embedUrl" width="560" height="315" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    embedUrl() {
      let videoId = this.videoUrl.split("=")[1];
      return "https://www.youtube.com/embed/" + videoId;
    },
  },
};

</script>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>