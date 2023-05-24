<template>
  <div class="container-fluid">
    <form class="d-flex" role="search" @submit.prevent="search">
      <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search" v-model="searchTerm">
      <button class="btn btn-outline-info" type="submit">Поиск</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RuSteamSearch",
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    search() {

      console.log("Отправлен запрос с поисковым термином:", this.searchTerm);
    }
  }
};
</script>


<style scoped>

</style>