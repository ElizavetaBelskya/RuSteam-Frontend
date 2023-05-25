<template>
<div id="root">
        <router-link to="/register" type="button" class="btn btn-outline-info">Зарегистрироваться</router-link>
        <LoginDialog/>
</div>
</template>

<script>
import LoginDialog from "@/components/LoginDialog.vue";

export default {
  name: "LoginInvitation",
  components: {LoginDialog}
}
</script>

<style scoped>

#root {
  background-color: rgba(66, 38, 134, 0.27);
  opacity: 0.8;
  margin-right: 15%;
  margin-left: 15%;
  border: 1px solid #00bcd0;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
}

.btn {
  margin: 5px;
}

</style>