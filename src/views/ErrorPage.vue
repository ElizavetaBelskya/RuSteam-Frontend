<template>
  <h4 id = "appeal">К сожалению, мы не нашли искомую страницу</h4>
  <AdsBanner/>
</template>

<script>
import AdsBanner from "@/components/AdsBanner.vue";

export default {
  name: "ErrorPage",
  components: {AdsBanner}
}
</script>

<style scoped>
#appeal {
  color: white;
  background-color: rgba(66, 38, 134, 0.27);
  opacity: 0.8;
  border: 1px solid #00bcd0;
  border-radius: 10px;
  padding: 5%;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 5%;
}
</style>