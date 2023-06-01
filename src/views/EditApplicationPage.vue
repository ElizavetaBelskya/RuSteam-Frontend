<template>
  <form id="form" @submit.prevent="saveApplication">
    <div class="mb-3">
      <label for="name" class="form-label">Название</label>
      <input type="text" v-model="name" class="form-control" id="name" placeholder="Введите название" required>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Описание</label>
      <textarea v-model="description" class="form-control" id="description" placeholder="Введите описание" required></textarea>
    </div>
    <div class="mb-3">
      <label for="price" class="form-label">Цена</label>
      <input type="number" v-model="price" class="form-control" id="price" placeholder="Введите цену" required>
    </div>
    <div class="mb-3">
      <label for="categories" class="form-label">Категории</label>
      <select v-model="category" class="form-select" id="categories">
        <option value="Шутеры">Шутеры</option>
        <option value="Аркады">Аркады</option>
        <option value="Бизнес">Бизнес</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="youtubeUrl" class="form-label">Ссылка на YouTube</label>
      <input type="text" v-model="youtubeUrl" class="form-control" id="youtubeUrl" placeholder="Введите ссылку на YouTube" required>
    </div>
    <div class="mb-3">
      <label for="iconUrl" class="form-label">Ссылка на иконку</label>
      <input type="text" v-model="iconUrl" class="form-control" id="iconUrl" placeholder="Введите ссылку на иконку" required>
    </div>
    <div class="mb-3">
      <label for="androidDownloadLink" class="form-label">Ссылка на загрузку для Android</label>
      <input type="text" v-model="androidDownloadLink" class="form-control" id="androidDownloadLink" placeholder="Введите ссылку на загрузку для Android">
    </div>
    <div class="mb-3">
      <label for="windowsDownloadLink" class="form-label">Ссылка на загрузку для Windows</label>
      <input type="text" v-model="windowsDownloadLink" class="form-control" id="windowsDownloadLink" placeholder="Введите ссылку на загрузку для Windows">
    </div>
    <div>
      {{ message }}
    </div>
    <button type="submit" class="btn  btn-outline-info">Сохранить</button>
  </form>
</template>

<script>
import axios from "axios";
import router from "@/router";
import {getDeveloper, getRefreshToken} from "@/plugins/token";

export default {
  name: "EditApplicationPage",
  data() {
    return {
      id: Number,
      name: '',
      description: '',
      price: 0.0,
      category: '',
      developerId: 0,
      youtubeUrl: '',
      iconUrl: '',
      message: '',
      androidDownloadLink: '',
      windowsDownloadLink: ''
    }
  },
  async mounted() {
    this.id = this.$route.params.appId;
    try {
      const account = await getDeveloper();
      this.developerId = account.devInfo.id;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
    this.loadApplicationDetails(this.appId);
  },
  methods: {
    loadApplicationDetails() {
      fetch(axios.defaults.baseURL + 'applications/' + this.id, {
        method: 'GET',
      }).then(res => res.json())
          .then(res => {
            console.log(res)
            this.description = res.description;
            this.name = res.name;
            this.youtubeUrl = res.youtubeUrl;
            this.iconUrl = res.iconUrl;
            this.androidDownloadLink = res.androidDownloadLink;
            this.windowsDownloadLink = res.windowsDownloadLink;
            this.category =  res.categories[0];
          }).catch(error => console.error('Error:', error));

    },
    async saveApplication() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('applications/' + this.id, {
        developerId: this.developerId,
        name: this.name,
        description: this.description,
        price: this.price,
        category: this.category,
        youtubeUrl: this.youtubeUrl,
        iconUrl: this.iconUrl,
        androidDownloadLink: this.androidDownloadLink,
        windowsDownloadLink: this.windowsDownloadLink
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
                return this.saveApplication();
              }
            } else if (error.response.status === 400) {
              this.message = 'Данные некорректны'
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

.mb-3 .form-select {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}

.mb-3 textarea {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}

</style>