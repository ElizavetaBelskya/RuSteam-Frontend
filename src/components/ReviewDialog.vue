<template>
  <v-dialog v-model="dialog" persistent width="840">
    <template v-slot:activator="{ props }">
      <button type="button" class="btn btn-outline-info" v-bind="props">
        Изменить
      </button>
    </template>
    <v-card color="#42268644">
      <v-card-title>
        <span class="text-h5">Отзыв о приложении</span>
      </v-card-title>

      <v-rating v-model="newRating" bg-color="orange-lighten-1" color="blue"></v-rating>

      <div class="mb-3">
        <label for="review" class="form-label">Ваш отзыв</label>
        <textarea class="form-control" rows="5" id="review" v-model="newText"></textarea>
      </div>

      <v-card-actions>
        <v-spacer></v-spacer>
        <button type="button" class="btn btn-outline-info" @click="dialog = false">
          Закрыть
        </button>
        <button type="button" class="btn btn-outline-info" @click="saveChanges">
          Сохранить
        </button>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewDialog",
  props: {
    rating: Number,
    text: String,
    status: String,
    id: Number,
    applicationId: Number
  },
  data() {
    return {
      dialog: false,
      newRating: Number,
      newText: String
    }
  },
  created() {
    this.newText = this.text
    this.newRating = this.rating
  },
  methods: {
    async saveChanges() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('reviews/' + this.id, {
        applicationId: this.id,
        rating: this.newRating,
        text: this.newText,
      })
      this.$emit("review-updated")
      this.dialog = false;
    }
  }
};
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


.mb-3 textarea {
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