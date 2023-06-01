<template>
  <v-dialog
      v-model="dialog"
      persistent
      width="840"
  >
    <template v-slot:activator="{ props }">
      <button type="button"
              class="btn btn-outline-info"
              v-bind="props"
      >
        Войти
      </button>
    </template>
    <v-card color="#42268644">
      <v-card-title>
        <span class="text-h5">Войти в аккаунт</span>
      </v-card-title>

      <div class="mb-3">
        <label for="email" class="form-label">Ваш email</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password" v-model = "password" class="form-control" id="password" required>
      </div>
      <v-card-actions>
        <v-spacer>{{ message }}</v-spacer>
        <button
            type="button"
            class="btn btn-outline-info"
            @click="dialog = false"
        >
          Закрыть
        </button>
        <button
            type="button"
            class="btn btn-outline-info"
            @click="login"
        >
          Войти
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {getAccountId, getAccountInfo} from "@/plugins/token";

export default {
  name: "LoginDialog",
  data: () => ({
    email: '',
    password: '',
    dialog: false,
    message:  ''
  }),
  methods: {
    async login() {
      delete axios.defaults.headers.common['Authorization']
      await axios.post('auth/login', {
        email: this.email,
        password: this.password
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(async response => {
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.accessToken;
            const accountId = await getAccountId();
            const accountInfo = await getAccountInfo(accountId);
            console.log(accountInfo.role)
            if (accountInfo.role === 'USER') {
              router.push('/profile')
            } else if (accountInfo.role === 'MODERATOR') {
              router.push('/developer_profile')
            } else if (accountInfo.role === 'ANON') {
              router.push('/ask')
            }
          }
      ).catch(error => {
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

.btn {
  margin-left: 15px;
}

.v-card {
  padding: 10%;
  color: white;
  background-color: rgba(79, 18, 225, 0.8);
}


.mb-3 input {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}

@media (max-width: 500px) {
  .btn {
    margin-left: 4px;
    font-size: 14px;
  }

  .v-card {
    padding: 6%;
    color: white;
    background-color: rgba(79, 18, 225, 0.8);
  }


}
</style>