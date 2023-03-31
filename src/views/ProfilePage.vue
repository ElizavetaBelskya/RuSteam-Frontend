<template>
  <RusteamSidebar/>
  <ProfileInfo email="email@mail" name="Лиза" surname="Бельская" gender="Женский"
               birthtime="03.07.2003" nickname="Liza"
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

export default {
  name: "ProfilePage",
  components: {RusteamSidebar, UserAppItem, ProfileInfo},
  data() {
    return {

    }
  },

  created() {
    // let pageId = this.page - 1
    // fetch('http://localhost:80/applications?page=' + pageId, {
    //   method: 'GET',
    // }).then(res => res.json())
    //     .then(res => {
    //       this.apps = res.applications
    //       this.pagescount = res.totalPagesCount
    //     }).catch(error => console.error('Error:', error));
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