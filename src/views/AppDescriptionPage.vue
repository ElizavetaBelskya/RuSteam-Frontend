<template>
<div>
  <div class="app-container">
<!--    <VideoContainer video-url="{{embedUrl}}"/>-->
    <h1>Angry birds</h1>

    <div>
      <img id ="main-img" src="../assets/angrybirds.png" width="400" height="400" alt="Angry birds">
      <div id="des-text">
        <h3>Описание приложения</h3>
        <p>sssssssssssssssssssssssssssssssssssssssssssssssssss
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
        </p>
      </div>
    </div>
<!--    <AppInfoBanner-->
<!--        :image1 = "image1"-->
<!--        :image2 = "image2"-->
<!--        :image3 = "image3"-->
<!--    />-->
    <h3>Отзывы о приложении</h3>
    <div class="reviews-container">
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />
      <ReviewForDescription nickname="User1223" rating="4" text = "капец бомба огонь ваще" />

    </div>
  </div>

</div>
</template>

<script>
// import AppInfoBanner from "@/components/AppInfoBanner.vue";
import ReviewForDescription from "@/components/ReviewForDescription.vue";

export default {
  name: "AppDescription",
  components: {ReviewForDescription},
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
  margin: 5%;
  text-align: center;
  background-color: rgba(8, 0, 28, 0.85);
  opacity: 0.9;
  border-radius: 25px;
  padding-top: 30px;
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