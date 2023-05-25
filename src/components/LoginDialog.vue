<template>
  <v-dialog
      v-model="dialog"
      persistent
      width="840"
  >
    <template v-slot:activator="{ props }">
      <button type="button"
              class="btn btn-outline-info"
              v-bind="props"
      >
        Войти
      </button>
    </template>
    <v-card color="#42268644">
      <v-card-title>
        <span class="text-h5">Войти в аккаунт</span>
      </v-card-title>



      <div class="mb-3">
        <label for="email" class="form-label">Ваш email</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input type="password" v-model = "password" class="form-control" id="password" required>
      </div>


      <v-card-actions>
        <v-spacer></v-spacer>
        <button
            type="button"
            class="btn btn-outline-info"
            @click="dialog = false"
        >
          Close
        </button>
        <button
            type="button"
            class="btn btn-outline-info"
            @click="dialog = false"
        >
          Save
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data: () => ({
    dialog: false,
  })
}
</script>

<style scoped>

.btn {
  margin-left: 15px;
}

.v-card {
  padding: 10%;
  color: white;
  background-color: rgba(79, 18, 225, 0.8);
}


.mb-3 input {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}

@media (max-width: 500px) {
  .btn {
    margin-left: 4px;
    font-size: 14px;
  }

  .v-card {
    padding: 6%;
    color: white;
    background-color: rgba(79, 18, 225, 0.8);
  }


}


</style>