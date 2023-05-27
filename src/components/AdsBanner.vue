<template>
  <div id="banner-carousel" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://top-mmogames.ru/assets/images/browsergames/tanki-online.jpg" class="d-block w-100" alt="Танки онлайн">
      </div>
      <div class="carousel-item">
        <img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Warface_AllodsTeam_S1_2560x1440-bf3c5da7b0239523117b1ff2bba16dc9" class="d-block w-100" alt="War face">
      </div>
      <div class="carousel-item">
        <img src="https://vkplay.ru/hotbox/showcase/gamelocale/picture/dac9251a-d851-4ff9-b783-edcb8a6f2bc1.jpg" class="d-block w-100" alt="Atomic heart">
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
  name: "AdsBanner",
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
}
</script>

<style scoped>


#banner-carousel {
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 2%;
}

@media (max-width: 500px) {
  #banner-carousel {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
  }
}

</style>