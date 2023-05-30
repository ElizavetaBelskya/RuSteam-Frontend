<template>
  <div class ="App">
    <RusteamSidebar id = "main-sidebar"/>
    <AdsBanner/>
    <LoginInvitation/>
    <div class ="app-list" id = "main-list">


      <div class="container-fluid">
        <form class="d-flex" role="search" @submit.prevent="search">
          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" v-model="searchTerm">
          <button class="btn btn-outline-info" type="submit">Поиск</button>
        </form>
      </div>

      <SelectFilter @updated="handleSelectUpdated" id = "select"></SelectFilter>
      <ul class = "filters">
        <li>
          <FilterChip @click="changePrice" titlePositive="Бесплатные" titleNegative="+ только бесплатные"
          />
        </li>
        <li>
          <FilterChip @click="changeIsNew" titlePositive="Новинки" titleNegative="+ новинки"/>
        </li>
        <li>
          <FilterChip @click="changeRating" titlePositive="Высокий рейтинг" titleNegative="+ высокий рейтинг"/>
        </li>
      </ul>

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
  </div>
</template>

<script>
import AppListItem from '@/components/AppListItem.vue'
import RusteamSidebar from "@/components/Sidebar.vue"
import FilterChip from "@/components/FilterChip.vue";
import SelectFilter from "@/components/SelectFilter.vue";
import AdsBanner from "@/components/AdsBanner.vue";
import LoginInvitation from "@/components/LoginInvitation.vue";
import axios from "axios";

export default {
  name: "AppListPage",
  components: {
    LoginInvitation,
    AdsBanner,
    SelectFilter,
    FilterChip,
    RusteamSidebar,
    AppListItem
  },
  data() {
    return {
      category: 'null',
      rating: 0.0,
      isNew: 'false',
      price: -1,
      searchTerm: "",
      page: 1,
      pagescount: 1,
      apps: []
    }
  },
  methods: {
    handleSelectUpdated(value) {
      this.category = value.state;
      this.fetchData();
    },
    changeIsNew() {
      this.page = 1
      this.isNew = this.isNew === 'false'? 'true': 'false';
      this.fetchData();
    },
    changePrice() {
      this.page = 1
      this.price = this.price === 0? -1: 0;
      this.fetchData();
    },
    changeRating() {
      this.page = 1
      this.rating = this.rating === 0.0? 4.0 : 0.0
      this.fetchData();
    },
    fetchData: function() {
      if (this.searchTerm === '') {
        let pageId = this.page - 1
        fetch(axios.defaults.baseURL + 'applications?page=' + pageId + '&new=' + this.isNew + '&rating=' + this.rating + '&price=' + this.price + '&category=' + this.category, {
          method: 'GET'
        }).then(res => res.json())
            .then(res => {
              console.log(res);
              this.apps = res.applications;
              this.pagescount = res.totalPagesCount;
            }).catch(error => console.error('Error:', error));
      }

    },

    search() {
      fetch(axios.defaults.baseURL + 'applications/search?content='
          + this.searchTerm + "&page=" + 1, {
        method: 'GET'
      }).then(res => res.json())
          .then(res => {
            console.log(res);
            this.apps = res.applications;
            this.pagescount = 1;
          }).catch(error => console.error('Error:', error));
    }

  },
  watch: {
    searchTerm: function() {
      if (this.searchTerm === '') {
        let pageId = this.page - 1
        fetch(axios.defaults.baseURL + 'applications?page=' + pageId, {
          method: 'GET'
        }).then(res => res.json())
            .then(res => {
              console.log(res);
              this.apps = res.applications;
              this.pagescount = res.totalPagesCount;
            }).catch(error => console.error('Error:', error));
      }
      this.search();
    }
  },
  created() {
    let pageId = this.page - 1
    fetch(axios.defaults.baseURL + 'applications?page=' + pageId, {
      method: 'GET',
    }).then(res => res.json())
        .then(res => {
          this.apps = res.applications
          this.pagescount = res.totalPagesCount
        }).catch(error => console.error('Error:', error));
  }

  // data() {
  //   return axios('http://localhost:80/applications', {
  //     method: "GET"
  //     // apps: [
  //     //   {
  //     //     title: "Загадочный дом",
  //     //     image: "https://mahachkala.mir-kvestov.ru/uploads/quests/12139/original/shetvertyy_vid_dom_uzhasov_photo1.jpg?1643794780",
  //     //     description: "Игра с потрясающей графикой, которая заставит вас по-настоящему испугаться..."
  //     //   },
  //     //   {
  //     //     title: "Homescapes",
  //     //     image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Homescapes_icon.png",
  //     //     description: "Дом и куча рекламы"
  //     //   },
  //     //   {
  //     //     title: "Angry birds",
  //     //     image: "https://assets-prd.ignimgs.com/2023/01/27/angrybirds-1674798875645.jpg",
  //     //     description: "Классическая игра для мобильных устройств, которая помогает скоротать время..."
  //     //   }
  //     // ],
  //     // tags: [
  //     //   {
  //     //     title: ""
  //     //   }
  //     // ]
  //   }).then((apps) => {
  //     this.apps = apps
  //   })
  // }
}
</script>

<style scoped>

#main-sidebar {
  display: none;
}

* {
  box-sizing: border-box;
  margin: 0;
}

header {
  display: none;
}
.app-list {
  color: aliceblue;
  padding: 1% 15% 7%;
}

li {
  list-style-type: none;
  margin-bottom: 1%;
  margin-top: 1%;
}

.filters {
  display: inline-flex;
  margin: 5px;
}

.filters li {
  margin: 5px;
}

@media (max-width: 400px) {

  header {
    background: rgba(8, 0, 28, 0.85);
    color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app-list {
    padding: 0;
  }

  .app-list ul {
    padding: 0;
  }

  .filters {
    display: inline-block;
    margin-left: 22%;
  }

  .filters li {
    margin-bottom: 7px;
  }


  #select {
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 0;
  }

}


@media (max-width: 500px) {

  header {
    background: rgba(8, 0, 28, 0.85);
    color: #fff;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app-list {
    padding: 0;
  }

  .app-list ul {
    padding: 0;
  }

  .filters {
    display: inline-block;
    margin-left: 22%;
  }

  .filters li {
    margin-bottom: 7px;
  }

  #select {
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 0;
  }

}


#select {
  margin-top: 3%;
}


</style>