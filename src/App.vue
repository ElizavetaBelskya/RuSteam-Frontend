<template>
  <div class = "main">
    <img id = "main-logo" src="./assets/rusteam.png" alt = "Rusteam logo">

    <router-view/>
    <RusteamFooter/>
  </div>
</template>

<script>
import RusteamFooter from "@/components/RusteamFooter.vue";
export default ({
  name: 'App',
  components: {RusteamFooter}
})
</script>

<style>
.main {
  background: url('@/assets/backgrn.png');
  background-size: 70%;
}

#main-logo img {
  background: none;
}

#main-logo {
  width: 40%;
  height: auto;
  margin-left: 30%;
}

@media (max-width: 500px) {
  #main-logo {
    width: 80%;
    height: auto;
  }
}

</style>
