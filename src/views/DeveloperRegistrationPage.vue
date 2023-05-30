<template>
  <form id="form" @submit.prevent="updateDeveloper">
    <div class="mb-3">
      <label for="name" class="form-label">Название организации</label>
      <input type="text" v-model="name" class="form-control" id="name" placeholder="Имя">
    </div>
    <div class="mb-3">
      <label for="review" class="form-label">Описание вашей организации</label>
      <textarea class="form-control" rows="5" id="review" v-model="newText"></textarea>
    </div>

    <button type="submit" class="btn btn-outline-info" id="register-btn">Сохранить</button>
  </form>

</template>

<script>


import axios from "axios";
import router from "@/router";
import {getDeveloperAccount, getRefreshToken} from "@/plugins/token";

export default {
  name: "DeveloperRegistrationPage",
  data() {
    return {
      id: Number,
      name: '',
      newText: ''
    }
  },
  async created() {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
    this.id = await getDeveloperAccount()
  },
  methods: {
    async updateDeveloper() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.post('developers', {
        accountId: this.id,
        name: this.name,
        description: this.newText
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        router.push('/developer_profile')
      }).catch(error => {
            if (error.response && error.response.status === 401) {
              const tokenResponse = getRefreshToken();
              if (tokenResponse.status === 200) {
                return this.updateUser();
              }
            } else {
              router.push('/error');
              console.error('Ошибка при выполнении запроса:', error);
            }
          }
      )
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

.mb-3 textarea {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}


</style>