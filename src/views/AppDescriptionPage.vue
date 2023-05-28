<template>
<div>
  <div class="app-container">
    <h1>{{ name }}</h1>

    <div>
      <div id="des-text">
        <img id ="main-img" src="../assets/angrybirds.png" width="200" height="200" alt="Angry birds">
        <h3>Описание приложения</h3>
        <p>{{ description }}</p>
      </div>
      <hr>
      <div>
        <a :href="downloadLink" class="download-button" download="your-application.apk">Загрузить на Android</a>
        <a :href="downloadLink" class="download-button" download="your-application.apk">Загрузить на Windows</a>
      </div>
      <hr>
      <AppInfoBanner
          :image1 = "image1"
          :image2 = "image2"
          :image3 = "image3"></AppInfoBanner>
      <hr>
      <VideoContainer :video-url="embedUrl"></VideoContainer>
      <hr>
    </div>
    <h3>Отзывы о приложении</h3>
    <div class="reviews-container">
      <template v-if="reviews.length > 0">
        <li v-for="review in reviews" :key="review">
          <ReviewForDescription nickname="Anon" :rating="review.rating" :text="review.text" />
        </li>
        <v-pagination
            v-model="page"
            :length="pagescount"
            rounded="circle"
            @click="fetchData"
        ></v-pagination>
      </template>
      <template v-else>
        <p>На данный момент отзывы отсутствуют</p>
      </template>
    </div>
    <hr>
    <div>
      <div class = "app-info">
        <h3>Paзработчик</h3>
        <h3 class = "app-item-title">{{developerName}}</h3>
        <p class = "profile-description">{{developerDescription}}</p>
        <router-link :to="{ name: 'developer', params: { developerId: devId } }">
          <button type="button" class="btn btn-outline-info">Подробнее о разработчике</button>
        </router-link>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import AppInfoBanner from "@/components/AppInfoBanner.vue";
import VideoContainer from "@/components/VideoContainer.vue";
import ReviewForDescription from "@/components/ReviewForDescription.vue";
import axios from "axios";

export default {
  name: "AppDescription",
  components: {AppInfoBanner, VideoContainer, ReviewForDescription},
  data() {
    return {
      name: '',
      description: '',
      appId: Number,
      reviews: [],
      page: 1,
      pagescount: 1,
      devId: 1,
      developerName: 'Великие разрабы',
      developerDescription: 'Лучшая компания',
      embedUrl: "https://www.youtube.com/watch?v=BHW-yu173l8",
      image1: "https://cdn.lifehacker.ru/wp-content/uploads/2023/02/5929657_cover_Angry-Birds-Classic_1677046740-640x320.jpg",
      image2: "https://www.ixbt.com/img/x780/n1/news/2022/3/4/Classic_key_web-lbox-1440x820-trans_large.jpg",
      image3: "https://cdn.lifehacker.ru/wp-content/uploads/2023/02/Eg0ZtclFkNKbL4YpppNgNbXzu_VmoSw9_1677046817-1280x640.jpg",
      downloadLink: "https://storage.evozi.com/apk/dl/16/09/04/com.camerasideas.instashot_1332.apk"
    }
  },

  mounted() {
    this.appId = this.$route.params.appId;
    this.loadApplicationDetails(this.appId);
    this.fetchData()
  },


  methods: {
    loadApplicationDetails(id) {
      fetch(axios.defaults.baseURL + 'applications/' + id, {
        method: 'GET',
      }).then(res => res.json())
          .then(res => {
            this.description = res.description;
            this.name = res.name;
          }).catch(error => console.error('Error:', error));
    },

    fetchData: function () {
        let pageId = this.page - 1
        fetch(axios.defaults.baseURL + 'reviews?page=' + pageId + '&applicationId=' + this.appId, {
          method: 'GET'
        }).then(res => res.json())
            .then(res => {
              this.reviews = res.reviews;
              this.pagescount = res.totalPagesCount;
            }).catch(error => console.error('Error:', error));
    }
  }
}
</script>

<style scoped>

.download-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  margin: 10px;
}

.download-button:hover {
  background-color: #45a049;
}

.app-container {
  color: white;
  margin: 1% 5% 5%;
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

.app-info {
  padding: 5%;
}

.app-item-title {
  font-size: 22px;
  font-weight: bold;
}

.profile-description {
  margin-bottom: 3%;
  font-size: 16px;
}

#des-text {
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
}

#main-img {
  border-radius: 10%;
}

</style>