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
          Оценить
        </button>
      </template>
      <v-card color="#42268644">
        <v-card-title>
          <span class="text-h5">Отзыв о приложении</span>
        </v-card-title>

        <v-rating
            :value="rating"
            @input="updateRating"
            bg-color="orange-lighten-1"
            color="blue"
        ></v-rating>

        <div class="mb-3">
          <label for="email" class="form-label">Ваш отзыв</label>
          <textarea type="email" class="form-control" rows="5" id="email" required/>
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
  name: "ReviewDialog",
  data: () => ({
      dialog: false,
  }),
  methods: {
    updateRating(newRating) {
      this.$emit('update:rating', newRating);
    }
  }
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


.mb-3 textarea {
  border: 1px solid #00bcd0;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  opacity: 0.9;
}


</style>