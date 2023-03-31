<template>
<div>
  <div class="app-container">

<!--    <img src="../assets/angrybirds.png" alt="Angry birds">-->
<!--    <VideoContainer video-url="{{embedUrl}}"/>-->
    <h1>Название приложения</h1>

    <AppInfoBanner
        :image1 = "image1"
        :image2 = "image2"
        :image3 = "image3"
    />
    <p>Описание приложения</p>
    <h2>Отзывы о приложении</h2>
    <div class="reviews-container">
      <div class="review">
        <h3>Заголовок отзыва</h3>
        <p>Текст отзыва</p>
      </div>
      <div class="review">
        <h3>Заголовок отзыва</h3>
        <p>Текст отзыва</p>
      </div>
      <div class="review">
        <h3>Заголовок отзыва</h3>
        <p>Текст отзыва</p>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import AppInfoBanner from "@/components/AppInfoBanner.vue";

export default {
  name: "AppDescription",
  components: {AppInfoBanner},
  data() {
    return {
      embedUrl: "https://www.youtube.com/watch?v=1Bk_nqUQ0fc&ab_channel=AngryBirds",
      image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.angrybirds.com%2F&psig=AOvVaw1Rh3Gw_7pJIgKvE6nPhydf&ust=1679584706036000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCeruDq7_0CFQAAAAAdAAAAABAD",
      image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ixbt.com%2Fnews%2F2022%2F04%2F01%2Fkultovaja-klassika-mobilnyh-igr-originalnaja-angry-birds-vozvrashaetsja.html&psig=AOvVaw1Rh3Gw_7pJIgKvE6nPhydf&ust=1679584706036000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCeruDq7_0CFQAAAAAdAAAAABAI",
      image3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fangry-birds-udalyat-iz-google-play%2F&psig=AOvVaw1Rh3Gw_7pJIgKvE6nPhydf&ust=1679584706036000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCeruDq7_0CFQAAAAAdAAAAABAQ",
    }
  }
}
</script>

<style scoped>

.app-container {
  color: white;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(8, 0, 28, 0.85);
  opacity: 0.8;
}

img {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}

h1 {
  font-size: 2rem;
  margin: 0;
}

p {
  font-size: 1.2rem;
  margin: 10px 0;
}

h2 {
  font-size: 1.5rem;
  margin: 20px 0;
}

.reviews-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.review {
  max-width: 400px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: left;
}

.review h3 {
  font-size: 1.2rem;
  margin: 0;
}

.review p {
  font-size: 1rem;
  margin: 10px 0;
}


</style>