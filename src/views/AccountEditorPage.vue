<template>
  <div id = "appeal">
    <h4>Пожалуйста, выберите, кто вы: разработчик или пользователь</h4>
    <router-link to="/register_user" type="button"
                 class="btn btn-outline-info">Пользователь</router-link>
    <router-link to="/register_developer" type="button"
                 class="btn btn-outline-info">Разработчик</router-link>
  </div>
</template>

<script>
export default {
  name: "AccountEditorPage"
}
</script>

<style scoped>

.btn {
  margin: 10px;
}

#appeal {
  background-color: rgba(66, 38, 134, 0.27);
  opacity: 0.8;
  color: aliceblue;
  margin: 5%;
  border: 1px solid #00bcd0;
  border-radius: 10px;
  padding: 5%;
}

</style>