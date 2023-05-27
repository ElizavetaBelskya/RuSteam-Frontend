<template>
  <div id = "profile-root">
    <div id = "container">
      <div class ="profile">
        <div class = "profile-info">
          <p class = "profile-description">Название: {{ name }}</p>
          <p class = "profile-description">Описание: {{ text }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class ="app-list" id = "main-list">

  <ul>
    <li
        v-for="app in apps" :key="app"
    >
      <AppListItem
          :id = "app.id"
          :title = "app.name"
          :description = "app.description"
          :image = "app.image"
      />
    </li>
  </ul>

  <v-pagination
      v-model="page"
      :length="pagescount"
      rounded="circle"
      @click="fetchData"
  ></v-pagination>
  </div>
</template>
<script>
import AppListItem from "@/components/AppListItem.vue";

export default {
  name: "DeveloperProfile",
  components: {AppListItem},
  data() {
    return {
      id: 1,
      name: "Разрабы великие",
      text: "Авторы крутейших приложений",
      page: 1,
      pagescount: 1,
      apps: []
    }
  },
  methods: {
    fetchData: function () {
        let pageId = this.page - 1
        fetch('http://localhost:80/developers/' + this.id + "/applications?page=" + pageId, {
          method: 'GET'
        }).then(res => res.json())
            .then(res => {
              this.apps = res.applications;
              this.pagescount = res.totalPagesCount;
            }).catch(error => console.error('Error:', error));
    },
  },
  created() {
    let pageId = this.page - 1
    fetch('http://localhost:80/developers/' + this.id + "/applications?page=" + pageId,  {
      method: 'GET',
    }).then(res => res.json())
        .then(res => {
          this.apps = res.applications
          this.pagescount = res.totalPagesCount
        }).catch(error => console.error('Error:', error));
  }

}

</script>

<style scoped>

header {
  display: none;
}

li {
  list-style-type: none;
  margin-bottom: 1%;
  margin-top: 1%;
}

.filters li {
  margin: 5px;
}

#profile-root {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

#container {
  width: 70%;
  background-color: rgba(66, 38, 134, 0.27);
  border: 3px solid white;
  opacity: 0.8;
  border-radius: 15px 15px 15px 15px;
  margin-bottom: 5%;
}

.profile-info {
  padding: 1% 3% 3%;
}

.profile-description {
  font-size: 18px;
}

.app-list {
  color: aliceblue;
  padding: 1% 15% 7%;
}

</style>