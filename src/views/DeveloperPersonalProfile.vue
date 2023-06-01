<template>
  <div id = "profile-root">
    <div id = "container">
      <div class ="profile">
        <div class = "profile-info">
          <p class = "profile-description">Название: {{ name }}</p>
          <p class = "profile-description">Описание: {{ text }}</p>
        </div>
        <div class="crud-buttons">
          <ul>
            <li>
              <router-link to="/add_app" type="button" class="btn btn-outline-info">Добавить новое приложение</router-link>
            </li>
            <li>
              <button id = "delete-profile-btn" @click="deleteUser" type="button" class="btn btn-outline-info">Удалить аккаунт</button>
            </li>
            <li>
              <button id = "delete-profile-btn" @click="logout" type="button" class="btn btn-outline-info">Выйти</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class ="app-list" id = "main-list">

    <ul>
      <li
          v-for="app in apps" :key="app"
      >
        <AppListItem
            :id = "app.id"
            :title = "app.name"
            :description = "app.description"
            :image = "app.iconUrl"
        />
      </li>
    </ul>

    <v-pagination
        v-model="page"
        :length="pagescount"
        rounded="circle"
        @click="fetchData"
    ></v-pagination>
  </div>
</template>
<script>
import AppListItem from "@/components/AppListItem.vue";
import axios from "axios";
import {getDeveloper} from "@/plugins/token";
import router from "@/router";

export default {
  name: "DeveloperProfile",
  components: {AppListItem},
  data() {
    return {
      devId: 1,
      id: 1,
      name: "",
      text: "",
      page: 1,
      pagescount: 1,
      apps: []
    }
  },
  methods: {
    async fetchData() {
      let pageId = this.page - 1
      fetch(axios.defaults.baseURL + 'developers/' + this.id + "/applications?page=" + pageId, {
        method: 'GET'
      }).then(res => res.json())
          .then(res => {
            this.apps = res.applications;
            this.pagescount = res.totalPagesCount;
          }).catch(error => console.error('Error:', error));
    },
    async getInfo() {
      try {
        const account = await getDeveloper();
        this.id = account.accountInfo.id;
        this.email = account.accountInfo.email;
        this.nickname = account.accountInfo.nickname;
        this.devId = account.devInfo.id;
        this.name = account.devInfo.name != null ? account.devInfo.name : 'Не задано';
        this.text = account.devInfo.description != null ? account.devInfo.description : 'Не задано';
        console.log(account);
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    },
    async deleteUser() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.delete('accounts/' + this.id)
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      await router.push('/')
    },
    async logout() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.post('auth/token/revoke');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      await router.push('/')
    }
  },
  async created() {
    await this.getInfo()
    let pageId = this.page - 1
    fetch(axios.defaults.baseURL + 'developers/' + this.devId + "/applications?page=" + pageId,  {
      method: 'GET',
    }).then(res => res.json())
        .then(res => {
          this.apps = res.applications
          this.pagescount = res.totalPagesCount
        }).catch(error => console.error('Error:', error));
  }

}

</script>

<style scoped>

header {
  display: none;
}

li {
  list-style-type: none;
  margin-bottom: 1%;
  margin-top: 1%;
}

.filters li {
  margin: 5px;
}

#profile-root {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

#container {
  width: 70%;
  background-color: rgba(66, 38, 134, 0.27);
  border: 3px solid white;
  opacity: 0.8;
  border-radius: 15px 15px 15px 15px;
  margin-bottom: 5%;
}

.profile-info {
  padding: 1% 3% 3%;
}

.profile-description {
  font-size: 18px;
}

.app-list {
  color: aliceblue;
  padding: 1% 15% 7%;
}

.crud-buttons {
  padding: 0;
  margin-left: 2%;
  margin-right: 2%;
}

.crud-buttons ul {
  list-style: none;
  padding: 0;
}

.crud-buttons li {
  margin: 5px;
}

</style>