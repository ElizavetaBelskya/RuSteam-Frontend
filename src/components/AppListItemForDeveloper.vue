<template>
  <div id = "item-root">
    <div id = "container">
      <div class ="app-item">
        <div class ="app-cell">
          <img :src = "image" alt="app image" class ="app-item-image"/>
        </div>
        <div class = "app-info">
          <h3 class = "app-item-title">{{ title }}</h3>
          <p class = "profile-description">{{ shortDescription }}</p>
          <router-link :to="{ name: 'app', params: { appId: id } }">
            <button type="button" class="btn btn-outline-info">Подробнее</button>
          </router-link>

          <router-link :to="{ name: 'edit_app', params: { appId: id } }">
            <button type="button" class="btn btn-outline-info">Обновить данные</button>
          </router-link>
          <button  v-if="deleteButton" type="button" @click="deleteApp" class="btn btn-outline-info">Удалить приложение</button>
          <button  v-if="publishButton" type="button" @click="publishApp" class="btn btn-outline-info">Восстановить приложение</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "AppListItemForDeveloper",
  props: {
    id: Number,
    title: String,
    image: String,
    description: String,
    state: String
  },
  data() {
    return {
      shortDescription: String,
      deleteButton: Boolean,
      publishButton: Boolean
    };
  },
  created() {
    this.shortDescription = this.description.split('.').slice(0, 3).join('. ') + '.';
    if (this.state === 'DELETED') {
      this.publishButton = true
      this.deleteButton = false
    } else {
      this.deleteButton = true
      this.publishButton = false
    }
  },
  methods: {
    async deleteApp() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.delete('applications/' + this.id)
      this.$emit('app-updated');
    },
    async publishApp() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('applications/' + this.id + '/publish')
      this.$emit('app-updated');
    }
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

.btn {
  margin-left: 10px;
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