<template>
  <div class = "main">
    <img id = "main-logo" src="../assets/rusteam.png" alt = "Rusteam logo">

    <router-view/>
    <RusteamFooter/>
  </div>
</template>

<script>
import RusteamFooter from "@/components/RusteamFooter.vue";

export default {
  name: "default-layout.vue",
  components: {RusteamFooter}
}
</script>

<style scoped>
.main {
  background-size: 80%;
  background: #1b2838 url('@/assets/backgr.jpg') repeat;
}

#main-logo img {
  background: none;
}

#main-logo {
  width: 60%;
  height: auto;
  margin-left: 20%;
}


</style>