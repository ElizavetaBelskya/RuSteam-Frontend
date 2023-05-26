<template>
  <div id="app-info" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="image1" class="d-block w-100 image" alt="1 illustration">
      </div>
      <div class="carousel-item">
        <img :src="image2" class="d-block w-100 image" alt="2 illustration">
      </div>
      <div class="carousel-item">
        <img :src="image3" class="d-block w-100 image" alt="3 illustration">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#app-info" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#app-info" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "AppInfoBanner",
  props: {
    image1: String,
    image2: String,
    image3: String,
  },
  mounted() {
    this.adjustImageSizes();
    window.addEventListener("resize", this.adjustImageSizes);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustImageSizes);
  },
  methods: {
    adjustImageSizes() {
      const images = this.$el.querySelectorAll(".carousel-item img");
      const smallestSize = Math.min(...Array.from(images).map((img) => img.naturalHeight));
      Array.from(images).forEach((img) => {
        img.style.height = smallestSize + "px";
        img.style.width = "auto";
      });
    },
  },
};
</script>

<style scoped>

#app-info {
  padding-left: 5%;
  padding-right: 5%;
}

.carousel-item {
  padding: 5%;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

</style>
