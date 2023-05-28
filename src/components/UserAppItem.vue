<template>
  <div id = "item-root">
    <div id = "container">
      <div class ="app-item">
        <div class ="app-cell">
          <img :src = "image" alt="app image" class ="app-item-image"/>
        </div>
        <div class = "app-info">
          <h3 class = "app-item-title">{{ title }}</h3>
          <p class = "profile-description">{{ description }}</p>
          <router-link :to="{ name: 'app', params: { appId: applicationId } }">
            <button type="button" class="btn btn-outline-info">Подробнее</button>
          </router-link>
        </div>
        <UserReview :rating="rating" :text="text"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserReview from "@/components/UserReview.vue";
import axios from "axios";

export default {
  name: "UserAppItem",
  components: {UserReview},
  props: {
    applicationId: Number,
    text: String,
    rating: Number
  },
  data() {
    return {
      title: String,
      image: 'https://play-lh.googleusercontent.com/1IZ94fIVSMGGTAM5xYLe-ZfMvtlkT91mx41-f8tG-Ge_wRoSeufxW92DShQpErX4GAci',
      description: String,
    }
  },
  async created() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
    const response = await axios.get('applications/' + this.applicationId);
    this.title = response.data.name
    this.description = response.data.description.split('.').slice(0, 2).join('. ') + '.';
  },
  methods: {

  }
}
</script>

<style scoped>


#item-root {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 2%;
}


#container {
  width: 70%;
  background-color: rgba(66, 38, 134, 0.27);
  border: 3px solid white;
  /*opacity: 0.8;*/
  border-radius: 15px 100px 15px 100px;
}

.app-item-image {
  border-radius: 5%;
  width: 200px;
  height: 200px;
  margin: 20px;
}

.app-info {
  padding: 7%;
}

.btn {
  margin-right: 20px;
}

.app-cell {
  float: left;
}

.app-info {
  padding: 7%;
}

.app-item-title {
  font-size: 24px;
  font-weight: bold;
}

.profile-description {
  margin-top: 2%;
  margin-bottom: 5%;
  font-size: 18px;
}

.crud-buttons ul {
  list-style: none;
  display: flex;
  margin-left: 20px;
}

.crud-buttons li {
  margin: 5px;
}



@media (max-width: 500px) {

  #item-root {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }


  #container {
    width: 100%;
    background-color: rgba(66, 38, 134, 0.27);
    border: 2px solid white;
    opacity: 0.8;
    border-radius: 15px 15px 15px 15px;

  }

  .app-item-image {
    border-radius: 5%;
    width: 100px;
    height: 100px;
    justify-self: center;
    align-self: center;
  }

  .app-info {
    padding: 7%;
  }


  .app-item-title {
    font-size: 18px;
    font-weight: bold;
  }

  .profile-description {
    display: none;
    margin-top: 2%;
    margin-bottom: 2%;
    font-size: 14px;
  }

  .btn-outline-info {
    font-size: 14px;
  }

  .crud-buttons {
  }

  .crud-buttons ul {
    list-style: none;
    display: flex;
    margin-left: 20px;
  }

  .crud-buttons li {
    margin: 10px;
  }

}


@media (max-width: 1000px) {

  /*#item-root {*/
  /*  display: flex;*/
  /*  align-items: center;*/
  /*  justify-content: center;*/
  /*  color: white;*/
  /*}*/


  /*#container {*/
  /*  !* display: table; *!*/
  /*  width: 100%;*/
  /*  background-color: rgba(66, 38, 134, 0.27);*/
  /*  border: 2px solid white;*/
  /*  opacity: 0.8;*/
  /*  border-radius: 15px 15px 15px 15px;*/

  /*}*/

  /*.app-item-image {*/
  /*  border-radius: 5%;*/
  /*  width: 150px;*/
  /*  height: 150px;*/
  /*  justify-self: center;*/
  /*  align-self: center;*/
  /*}*/

  /*.profile-info {*/
  /*  padding: 7%;*/
  /*}*/


  /*.app-item-title {*/
  /*  font-size: 18px;*/
  /*  font-weight: bold;*/
  /*}*/

  /*.profile-description {*/
  /*  display: none;*/
  /*  margin-top: 2%;*/
  /*  margin-bottom: 2%;*/
  /*  font-size: 14px;*/
  /*}*/

  /*.btn-outline-info {*/
  /*  font-size: 14px;*/
  /*}*/

  /*.crud-buttons ul {*/
  /*  list-style: none;*/
  /*  display: flex;*/
  /*}*/

  /*.crud-buttons li {*/
  /*  margin: 10px;*/
  /*}*/

}

</style>