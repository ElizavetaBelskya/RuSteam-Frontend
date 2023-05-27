<template>
  <div id = "item-root">
    <div id = "container">
      <div class ="app-item">
        <div class ="app-cell">
          <img src = "https://lh6.googleusercontent.com/proxy/Qd6fxx9vlyBGBuDh3PwpY3Bk4tbojehJl4hMkBP91hXXpkGwqygME6MTUsTjk1wDEtrp79rP8zlvNIWv7QIfRk-zWNfhYaOg60t1lpdgZCeIBadVRyQ5A9dtbuG7VYS2mXTc-Df5prYfPcM_hKzw=s0-d" alt="app image" class ="app-item-image"/>
        </div>
        <div class = "app-info">
          <h3 class = "app-item-title">{{ title }}</h3>
          <p class = "profile-description">{{ shortDescription }}</p>
          <router-link :to="{ name: 'app', params: { appId: id } }">
            <button type="button" class="btn btn-outline-info">Подробнее</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "AppListItem",
  props: {
    id: Number,
    title: String,
    image: URL,
    description: String
  },
  data() {
    return {
      shortDescription: String
    };
  },
  created() {
    this.shortDescription = this.description.split('.').slice(0, 3).join('. ') + '.';

  }
}
</script>

<style scoped>

#item-root {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}


#container {
  width: 100%;
  background-color: rgba(66, 38, 134, 0.27);
  border: 3px solid white;
  opacity: 0.8;
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
    width: 150px;
    height: 150px;
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

}


@media (max-width: 500px) {

  #item-root {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }


  #container {
    /* display: table; */
    width: 100%;
    background-color: rgba(66, 38, 134, 0.27);
    border: 2px solid white;
    opacity: 0.8;
    border-radius: 15px 15px 15px 15px;

  }

  .app-item-image {
    border-radius: 5%;
    width: 150px;
    height: 150px;
    justify-self: center;
    align-self: center;
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

}


</style>