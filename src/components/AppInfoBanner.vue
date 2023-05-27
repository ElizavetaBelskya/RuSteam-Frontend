<template>
  <div id="banner-carousel" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="image1" class="d-block w-100" alt="Танки онлайн">
      </div>
      <div class="carousel-item">
        <img :src="image2" class="d-block w-100" alt="War face">
      </div>
      <div class="carousel-item">
        <img :src="image3" class="d-block w-100" alt="Atomic heart">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#banner-carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#banner-carousel" data-bs-slide="next">
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
    window.addEventListener("load", this.adjustImageSizes);
    window.addEventListener("resize", this.adjustImageSizes);
  },
  beforeUnmounted() {
    window.removeEventListener("resize", this.adjustImageSizes);
  },
  methods: {
    adjustImageSizes() {
      const images = this.$el.querySelectorAll(".carousel-item img");
      const smallestHeight = Math.min(...Array.from(images).map((img) => img.naturalHeight));
      const smallestWidth = Math.min(...Array.from(images).map((img) => img.naturalWidth));
      Array.from(images).forEach((img) => {
        img.style.objectFit = "cover";
        img.style.objectPosition = "center";
        img.style.overflow = "hidden";
        img.style.height = smallestHeight + "px";
        img.style.width = smallestWidth + "px";
      });
    },
  },
};
</script>

<style scoped>

#banner-carousel {
  margin-top: 5%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 5%;
}

@media (max-width: 500px) {
  #banner-carousel {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
  }
}



</style>
