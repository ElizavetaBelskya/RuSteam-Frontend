<template>
  <RusteamSidebar/>
  <ProfileInfo :email="email" :name="name" :surname="surname" :gender="gender"
               :birthtime="birthdayDate" :nickname="nickname"
               avatar="https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg"/>

  <h2 id = "review-h">Купленные приложения</h2>
  <UserAppItem title="Telegram" description="Лучший мессенджер всех времен"
               image="https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q"
               rating="4" text="Все понравилось" />


<!--  <ul>-->
<!--    <li-->
<!--        v-for="app in apps" :key="app"-->
<!--    >-->
<!--      <UserAppItem-->
<!--          :title = "app.name"-->
<!--          :description = "app.description"-->
<!--          :image = "app.image"-->
<!--      />-->
<!--    </li>-->
<!--  </ul>-->

</template>

<script>
import ProfileInfo from "@/components/Profile.vue";
import UserAppItem from "@/components/UserAppItem.vue";
import RusteamSidebar from "@/components/Sidebar.vue";
import axios from "axios";
import router from "@/router";

export default {
  name: "ProfilePage",
  components: {RusteamSidebar, UserAppItem, ProfileInfo},
  data() {
    return {
      id: 0,
      email: '',
      name: 'Не задано',
      surname: 'Не задано',
      nickname: '',
      gender: 'Нет информации',
      birthdayDate: 'Нет информации',
      refresh: false
    }
  },

  created() {
    this.getInfo();
  },

  methods: {
    async getAccountId() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' +
          localStorage.getItem('accessToken');
      const response = await axios.get('accounts/account_id');
      this.id = response.data;
      const account_response = await axios.get('accounts/' + this.id);
      if (account_response.status === 200) {
        this.email = account_response.data.email;
        this.nickname = account_response.data.nickname;
        const user_response = await axios.get('users/' + this.id);
        if (user_response.status === 200) {
          this.name = user_response.data.name != null ? user_response.data.name : 'Не задано';
          this.surname = user_response.data.surname != null ? user_response.data.surname : 'Не задано';
          this.gender = user_response.data.gender != null ? (user_response.data.gender === 'MALE' ? 'Мужской' : 'Женский') : 'Нет информации';
          this.birthdayDate = user_response.data.birthdayDate != null ? user_response.data.birthdayDate : 'Нет информации';
        }
      }
    },

    async getRefreshToken() {
      try {
        const token = localStorage.getItem('refreshToken');
        localStorage.removeItem('accessToken')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        const res = await axios.post('auth/login');
        this.refresh = true
        if (res.status === 200) {
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refreshToken', res.data.refreshToken);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.accessToken;
          await this.getInfo()
        } else {
          localStorage.removeItem('refreshToken');
          await router.push('/login');
        }
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        console.error('Ошибка при обновлении токена:', refreshError);
        await router.push('/login');
      }
    },

    async getInfo() {
      try {
        await this.getAccountId();
      } catch (error) {
        if (error.response && error.response.status === 401 && !this.refresh) {
          await this.getRefreshToken();
        } else {
          await router.push('/error')
          console.error('Ошибка при выполнении запроса:', error);
        }
      }
    }

  }


}

</script>

<style scoped>

#review-h {
  color: rgba(255, 255, 255, 0.77);
  text-align: center;
  margin-bottom: 20px;
}

</style>