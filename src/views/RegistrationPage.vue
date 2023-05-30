<template>
  <form id="form" @submit.prevent="onRegisterClick">
    <Invitation/>
    <div class="mb-3">
      <label for="email" class="form-label">Ваш email</label>
      <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com" required>
    </div>
    <div class="mb-3">
      <label for="nickname" class="form-label">Ваш псевдоним на сайте</label>
      <input type="text" v-model="nickname" class="form-control" id="nickname" placeholder="Псевдоним" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input type="password" v-model="password" class="form-control" id="password" placeholder="Пароль" required>
    </div>
    <div class="mb-3">
      <label for="password-form" class="form-label">Повторите пароль</label>
      <input type="password" v-model="password_repeat" class="form-control" id="password-form" placeholder="Пароль"
             required>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="approval" checked required>
      <label class="form-check-label" for="approval">
        Я даю согласие на обработку персональных данных
      </label>
    </div>

    <button type="submit" class="btn btn-outline-info" id="register-btn">Зарегистрироваться</button>

  </form>
</template>

<script>
import Invitation from "@/components/Invitation.vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "RegistrationPage",
  components: {Invitation},
  data() {
    return {
      email: '',
      nickname: '',
      password: '',
      password_repeat: ''
    }
  },
  methods: {
    async onRegisterClick() {
      delete axios.defaults.headers.common['Authorization']
      axios.post("accounts",
          {
            email: this.email,
            nickname: this.nickname,
            password: this.password
          }).then(response => {
        if (response.status === 201) {
          console.log('Регистрация прошла успешно');
          this.login();
        } else {
          console.error('Ошибка при регистрации');
        }
      }).catch(
          error => {
            console.error('Ошибка сети:', error);
          }
      );

      //  fetch("http://localhost:80/accounts", {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   credentials: 'include',
      //   body: JSON.stringify( {
      //     email: this.email,
      //     nickname: this.nickname,
      //     password: this.password
      //   })
      // }).then(response => {
      //    if (response.ok) {
      //      console.log('Регистрация прошла успешно');
      //    } else {
      //      console.error('Ошибка при регистрации');
      //    }
      //  }).catch(error => {
      //    console.error('Ошибка сети:', error);
      //  });

    },

    async login() {
      delete axios.defaults.headers.common['Authorization']
      await axios.post('auth/login', {
        email: this.email,
        password: this.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
            console.log(response)
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
            router.push('/ask');
      }).catch(error => {
        if (error.response.status === 401) {
          this.message = 'Ошибка авторизации: неправильный email или пароль'
        } else if (error.response.status === 403) {
          this.message = 'У вас нет прав доступа'
        } else {
          this.message = 'Ошибка авторизации'
        }
      })

    }
  }
}
</script>

<style scoped>

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


</style>