<template>
  <RusteamSidebar/>
  <ProfileInfo :id="id" :email="email" :name="name" :surname="surname" :gender="gender"
               :birthtime="birthdayDate" :nickname="nickname"
               avatar="https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg"/>

  <h2 id = "review-h">Ваша отзывы на приложения</h2>

  <ul>
    <li
        v-for="review in reviews" :key="review"
    >
      <UserAppItem
          :application-id="review.applicationId"
          :rating="review.rating"
          :text="review.text"
      />
    </li>
  </ul>

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
      refresh: false,
      reviews: []
    }
  },

  created() {
    this.getInfo();
  },

  methods: {

    async getInfo() {
          try {
            const account = await getAccount();
            this.id = account.accountInfo.id;
            this.email = account.accountInfo.email;
            this.nickname = account.accountInfo.nickname;
            this.name = account.userInfo.name != null ? account.userInfo.name : 'Не задано';
            this.surname = account.userInfo.surname != null ? account.userInfo.surname : 'Не задано';
            this.gender = account.userInfo.gender != null ? (account.userInfo.gender === 'MALE' ? 'Мужской' : 'Женский') : 'Нет информации';
            this.birthdayDate = account.userInfo.birthdayDate != null ? account.userInfo.birthdayDate : 'Нет информации';
            this.reviews = account.userInfo.reviewsList;
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