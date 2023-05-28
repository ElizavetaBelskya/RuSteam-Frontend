<template>
  <div id = "profile-root">
    <div id = "container">
      <div class ="profile">
        <h5 id = "nickname">Пользователь {{ nickname }}</h5>
        <div class ="app-cell">
          <img :src = "avatar" alt="avatar" class ="avatar"/>
        </div>
        <div class = "profile-info">
          <p class = "profile-description">Email: {{ email }}</p>
          <p class = "profile-description">Имя: {{ name }}</p>
          <p class = "profile-description">Фамилия: {{ surname }}</p>
          <p class = "profile-description">Пол: {{ gender }}</p>
          <p class = "profile-description">Дата рождения: {{ birthtime }}</p>
        </div>
        <div class="crud-buttons">
          <ul>
            <li>
              <router-link to="/edit_user" type="button" class="btn btn-outline-info">Редактировать информацию</router-link>
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
</template>

<script>

import axios from "axios";
import router from "@/router";

export default {
  name: "ProfileInfo",
  props: {
    id: Number,
    email: String,
    name: String,
    surname: String,
    gender: String,
    birthtime: Date,
    nickname: String,
    avatar: URL
  },
  methods: {
    async deleteUser() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.delete('accounts/' + this.id)
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      await router.push('/')
    },
    async logout() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.post('auth/logout');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      await router.push('/')
    }
  }
}
</script>

<style scoped>


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
  border-radius: 15px 100px 15px 100px;
  margin-bottom: 5%;
}

#nickname {
  margin-left: 50px;
  margin-top: 20px;
}

.avatar {
  border-radius: 5%;
  width: 200px;
  height: 200px;
  margin: 7px 30px 50px 50px;
}

.app-cell {
  float: left;
}

.profile-info {
  padding: 1% 3% 3%;
}

.profile-description {
  font-size: 18px;
}

.crud-buttons {
  margin-left: 6%;
  margin-bottom: 3%;
}

.crud-buttons ul {
  list-style: none;
  display: flex;
}

.crud-buttons li {
  margin-right: 30px;
}



@media (max-width: 500px) {

  #profile-root {
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

  .avatar {
    border-radius: 5%;
    width: 100px;
    height: 100px;
    margin: 6px 20px 20px 20px;
  }

  #nickname {
    margin-left: 20px;
    margin-top: 12px;
  }

  .profile-info {
    padding: 2%;
  }

  .profile-description p {
    font-size: 16px;
  }

  .btn-outline-info {
    font-size: 18px;
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



}


@media (max-width: 500px) {

  /*#profile-root {*/
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

  /*.avatar {*/
  /*  border-radius: 5%;*/
  /*  width: 150px;*/
  /*  height: 150px;*/
  /*  justify-self: center;*/
  /*  align-self: center;*/
  /*}*/

  /*.profile-info {*/
  /*  padding: 7%;*/
  /*}*/

  /*.profile-description {*/
  /*  font-size: 16px;*/
  /*}*/

  /*.btn-outline-info {*/
  /*  font-size: 14px;*/
  /*}*/

  /*.crud-buttons ul {*/
  /*  list-style: none;*/
  /*  display: flex;*/
  /*}*/

  /*.crud-buttons li {*/

  /*}*/

}


</style>