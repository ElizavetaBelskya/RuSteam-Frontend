<template>
  <form id="form" @submit.prevent="onRegisterClick">
    <h4 id = "appeal">Заполнение этой информации является необязательным, но помогает нам в анализе потребностей наших пользователей</h4>
    <div class="mb-3">
      <label for="name" class="form-label">Ваше имя</label>
      <input type="text" v-model="name" class="form-control" id="name" placeholder="Имя">
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">Ваша фамилия</label>
      <input type="text" v-model="name" class="form-control" id="surname" placeholder="Фамилия">
    </div>

    <div class="mb-3">
      <label for="birthday_date" class="form-label">Дата рождения</label>
      <input type="date" v-model="birthday_date" class="form-control" id="birthday_date">
    </div>

    <div class="mb-3">
      <label class="form-label">Пол</label>
      <div class="form-check">
        <input
            type="radio"
            class="form-check-input"
            id="male"
            value="male" checked="true"
            v-model="gender"
        />
        <label class="form-check-label" for="male">Мужской</label>
      </div>
      <div class="form-check">
        <input
            type="radio"
            class="form-check-input"
            id="female"
            value="female"
            v-model="gender"
        />
        <label class="form-check-label" for="female">Женский</label>
      </div>
    </div>

    <button type="submit" class="btn btn-outline-info" id="register-btn">Сохранить</button>
    <router-link to="/profile" type="button" id="miss-btn"
                 class="btn btn-outline-info">Пропустить</router-link>
  </form>

</template>

<script>


import axios from "axios";

export default {
  name: "UserRegistrationPage",
  data() {
    return {
      birthday_date: '',
      name: '',
      surname: '',
      gender: ''
    }
  },
  methods: {
    async onRegisterClick() {

      axios.post("users",
          {
            birthday_date: this.birthday_date,
            name: this.name,
            surname: this.surname,
            gender: this.gender
          }).then(response => {
        if (response.ok) {
          console.log('Регистрация прошла успешно');
        } else {
          console.error('Ошибка при регистрации');
        }
      }).catch(
          error => {
            console.error('Ошибка сети:', error);
          }
      );

    }
  }
}
</script>

<style scoped>
#appeal {
  background-color: rgba(66, 38, 134, 0.27);
  opacity: 0.8;
  margin-bottom: 5%;
  border: 1px solid #00bcd0;
  border-radius: 10px;
  padding: 5%;
}

.mb-3 input {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}

input[type="checkbox"]:checked {
  background-color: #00bcd0;
}

input::placeholder {
  color: #999999;
}

#form {
  color: aliceblue;
  padding: 1% 20% 7%;
}

#register-btn {
  margin-top: 6%;
}

#miss-btn {
  margin-top: 6%;
  margin-left: 5%;
}


</style>