<template>
  <div id="app-info" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src = "image1.toString()" class="d-block w-100" alt="1 illustration">
        <div>
          <p>
            Информация обо всем
          </p>
        </div>

      </div>
      <div class="carousel-item">
        <img :src = "image2.toString()" class="d-block w-100" alt="2 illustration">
        <div>
          <p>
            Информация обо всем ввввввввввввввввввввввввввввввввввввввааааааааааааааааааааааааааааааааааааааааааааааааааааа
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img :src = "image3" class="d-block w-100" alt="3 illustration">
        <div>
          <p>
            Информация обо всем
          </p>
        </div>
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
  data() {
    return {
      image1 : String,
      image2: String,
      image3: String
    }
  }
}
</script>

<style scoped>

</style>