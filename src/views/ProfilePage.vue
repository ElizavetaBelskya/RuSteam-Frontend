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
import {getAccount} from "@/plugins/token";


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

    async getInfo() {
          try {
            const account = await getAccount();
            this.email = account.accountInfo.email;
            this.nickname = account.accountInfo.nickname;
            this.name = account.userInfo.name != null ? account.userInfo.name : 'Не задано';
            this.surname = account.userInfo.surname != null ? account.userInfo.surname : 'Не задано';
            this.gender = account.userInfo.gender != null ? (account.userInfo.gender === 'MALE' ? 'Мужской' : 'Женский') : 'Нет информации';
            this.birthdayDate = account.userInfo.birthdayDate != null ? account.userInfo.birthdayDate : 'Нет информации';
            console.log(account);
          } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
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