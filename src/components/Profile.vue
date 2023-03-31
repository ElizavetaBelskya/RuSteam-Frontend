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
              <button type="button" class="btn btn-outline-info">Редактировать информацию</button>
            </li>
            <li>
              <button type="button" class="btn btn-outline-info">Сменить пароль</button>
            </li>

            <li>
              <button id = "delete-profile-btn" type="button" class="btn btn-outline-info">Удалить аккаунт</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: {
    email: String,
    name: String,
    surname: String,
    gender: String,
    birthtime: Date,
    nickname: String,
    avatar: URL
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
    width: 150px;
    height: 150px;
    justify-self: center;
    align-self: center;
  }

  .profile-info {
    padding: 4%;
  }

  .profile-description {
    font-size: 14px;
  }

  .btn-outline-info {
    font-size: 14px;
  }

  .crud-buttons {
    margin: 6%;
  }

  .crud-buttons ul {
    list-style: none;
    display: flex;
  }

  .crud-buttons li {
    margin: 10px;
  }



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
    width: 150px;
    height: 150px;
    justify-self: center;
    align-self: center;
  }

  .profile-info {
    padding: 7%;
  }

  .profile-description {
    font-size: 16px;
  }

  .btn-outline-info {
    font-size: 14px;
  }

  .crud-buttons ul {
    list-style: none;
    display: flex;
  }

  .crud-buttons li {
    margin: 10px;
  }

}


</style>