<template>
  <form id="form" @submit.prevent="onRegisterClick">
   <Invitation/>
    <div class="mb-3">
      <label for="email" class="form-label">Ваш email</label>
      <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com" required>
    </div>
    <div class="mb-3">
      <label for="nickname" class="form-label">Ваш псевдоним на сайте</label>
      <input type="text" v-model = "nickname" class="form-control" id="nickname" placeholder="Псевдоним" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input type="password" v-model = "password" class="form-control" id="password" placeholder="Пароль" required>
    </div>
    <div class="mb-3">
      <label for="password-form" class="form-label">Повторите пароль</label>
      <input type="password" class="form-control" id="password-form" placeholder="Пароль" required>
    </div>

    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="approval" checked required>
      <label class="form-check-label" for="approval">
        Я даю согласие на обработку персональных данных
      </label>
    </div>

    <button type="submit" class="btn btn-outline-info" id= "register-btn">Зарегистрироваться</button>

  </form>
</template>

<script>
import Invitation from "@/components/Invitation.vue";

export default {
  name: "RegistrationPage",
  components: {Invitation},
  data() {
    return {
      email: '',
      nickname: '',
      password:''
    }
  },
  methods: {
    onRegisterClick: function() {
       fetch("http://localhost:80/accounts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify( {
          email: this.email,
          nickname: this.nickname,
          password: this.password
        })
      }).then(response => {
         if (response.ok) {
           console.log('Регистрация прошла успешно');
         } else {
           console.error('Ошибка при регистрации');
         }
       }).catch(error => {
         console.error('Ошибка сети:', error);
       });

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