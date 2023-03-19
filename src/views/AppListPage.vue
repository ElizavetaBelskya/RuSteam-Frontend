<template>
  <div class ="App">
    <RusteamSidebar/>
    <AdsBanner/>
    <div class ="app-list" id = "main-list">
      <RuSteamSearch/>
      <SelectFilter id = "select"/>
      <ul class = "filters">
        <li>
          <FilterChip titlePositive="Бесплатные" titleNegative="+ только бесплатные"
          />
        </li>
        <li>
          <FilterChip titlePositive="Новинки" titleNegative="+ новинки"/>
        </li>
        <li>
          <FilterChip titlePositive="Высокий рейтинг" titleNegative="+ высокий рейтинг"/>
        </li>
      </ul>

      <ul>
        <li
            v-for="app in apps" :key="app"
        >
          <AppListItem
              :title = "app.title"
              :description = "app.description"
              :image = "app.image"
          />
        </li>
      </ul>

      <v-pagination
          v-model="page"
          :length="4"
          rounded="circle"
      ></v-pagination>

    </div>
  </div>
</template>

<script>
import AppListItem from '@/components/AppListItem.vue'
import RusteamSidebar from "@/components/Sidebar.vue"
import RuSteamSearch from "@/components/RuSteamSearch.vue";
import FilterChip from "@/components/FilterChip.vue";
import SelectFilter from "@/components/SelectFilter.vue";
import AdsBanner from "@/components/AdsBanner.vue";
export default {
  name: "AppListPage",
  components: {
    AdsBanner,
    SelectFilter,
    FilterChip,
    RuSteamSearch,
    RusteamSidebar,
    AppListItem
  },
  data() {
    return {
      apps: [
        {
          title: "Загадочный дом",
          image: "https://mahachkala.mir-kvestov.ru/uploads/quests/12139/original/shetvertyy_vid_dom_uzhasov_photo1.jpg?1643794780",
          description: "Игра с потрясающей графикой, которая заставит вас по-настоящему испугаться..."
        },
        {
          title: "Homescapes",
          image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Homescapes_icon.png",
          description: "Дом и куча рекламы"
        },
        {
          title: "Angry birds",
          image: "https://assets-prd.ignimgs.com/2023/01/27/angrybirds-1674798875645.jpg",
          description: "Классическая игра для мобильных устройств, которая помогает скоротать время..."
        }
      ],
      tags: [
        {
          title: ""
        }
      ]
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}

header {
  display: none;
}

/*.welcome-block {*/
/*  height: 70vh;*/
/*  color: aliceblue;*/
/*  padding-top: 5vw;*/
/*  padding-left: 10vw;*/
/*  position: relative;*/

/*}*/

/*.bg {*/
/*  background-size: 100%;*/
/*  position: absolute;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  right: 0;*/
/*  left: 0;*/
/*  z-index: -1;*/
/*}*/

.app-list {
  color: aliceblue;
  padding: 1% 20% 7%;
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