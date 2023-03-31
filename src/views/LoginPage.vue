<template>
  <div>
    <AdsBanner/>
    <form id="form" @submit.prevent="onLoginClick">
      <div class="mb-3">
        <label for="email" class="form-label">Ваш email</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password" v-model = "password" class="form-control" id="password" placeholder="Пароль" required>
      </div>

      <button type="submit" class="btn btn-outline-info" id= "register-btn">Зарегистрироваться</button>

    </form>
  </div>
</template>

<script>
import AdsBanner from "@/components/AdsBanner.vue";

export default {
  name: "LoginPage",
  components: {AdsBanner},
  methods: {
    onLoginClick: function () {

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