<template>
<div>
  <div class="app-container">
    <h1>{{ name }}</h1>

    <div>
      <img id ="main-img" src="../assets/angrybirds.png" width="400" height="400" alt="Angry birds">
      <div id="des-text">
        <h3>Описание приложения</h3>
        <p>{{ description }}
        </p>
      </div>
    </div>

    <VideoContainer :video-url="embedUrl"></VideoContainer>
<!--    <AppInfoBanner-->
<!--        :image1 = "image1"-->
<!--        :image2 = "image2"-->
<!--        :image3 = "image3"-->
<!--    />-->
    <h3>Отзывы о приложении</h3>
    <div class="reviews-container">
        <li
            v-for="review in reviews" :key="review"
        >
          <ReviewForDescription nickname="User1223" :rating="review.rating" :text = "review.text" />
        </li>
    </div>
    <v-pagination
        v-model="page"
        :length="pagescount"
        rounded="circle"
        @click="fetchData"
    ></v-pagination>
  </div>

</div>
</template>

<script>
// import AppInfoBanner from "@/components/AppInfoBanner.vue";
import VideoContainer from "@/components/VideoContainer.vue";
import ReviewForDescription from "@/components/ReviewForDescription.vue";

export default {
  name: "AppDescription",
  components: {VideoContainer, ReviewForDescription},
  data() {
    return {
      name: '',
      description: '',
      appId: Number,
      reviews: [],
      page: 1,
      pagescount: 1,
      embedUrl: "https://www.youtube.com/watch?v=1Bk_nqUQ0fc&ab_channel=AngryBirds",
      image1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.angrybirds.com%2F&psig=AOvVaw1Rh3Gw_7pJIgKvE6nPhydf&ust=1679584706036000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCeruDq7_0CFQAAAAAdAAAAABAD",
      image2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ixbt.com%2Fnews%2F2022%2F04%2F01%2Fkultovaja-klassika-mobilnyh-igr-originalnaja-angry-birds-vozvrashaetsja.html&psig=AOvVaw1Rh3Gw_7pJIgKvE6nPhydf&ust=1679584706036000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCeruDq7_0CFQAAAAAdAAAAABAI",
      image3: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.ru%2Fangry-birds-udalyat-iz-google-play%2F&psig=AOvVaw1Rh3Gw_7pJIgKvE6nPhydf&ust=1679584706036000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCeruDq7_0CFQAAAAAdAAAAABAQ",
    }
  },

  mounted() {
    this.appId = this.$route.params.appId;
    this.loadApplicationDetails(this.appId);
    this.fetchData()
  },


  methods: {
    loadApplicationDetails(id) {
      console.log(id);
      fetch('http://localhost:80/applications/' + id, {
        method: 'GET',
      }).then(res => res.json())
          .then(res => {
            this.description = res.description;
            this.name = res.name;
          }).catch(error => console.error('Error:', error));
    },

    fetchData: function () {
        let pageId = this.page - 1
        fetch('http://localhost:80/reviews?page=' + pageId + '&applicationId=' + this.appId, {
          method: 'GET'
        }).then(res => res.json())
            .then(res => {
              console.log(res);
              this.reviews = res.reviews;
              this.pagescount = res.totalPagesCount;
            }).catch(error => console.error('Error:', error));
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
  list-style-type: none;
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