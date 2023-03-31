<template>
  <div class = "review">
    <h6>Ваша оценка приложения</h6>
    <v-rating
        :value="rating"
        @input="updateRating"
        bg-color="orange-lighten-1"
        color="blue"
    ></v-rating>
    <div id = "change-rating">
      <button type="button" class="btn btn-outline-info">Изменить</button>
    </div>
    <h6>Ваш отзыв о приложении</h6>
    <p>{{ text }}</p>
    <div class="crud-buttons">
      <ul>
        <li>
          <button type="button" class="btn btn-outline-info">Удалить/Восстановить</button>
        </li>
        <li>
          <button type="button" class="btn btn-outline-info">Опубликовать/Убрать</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserReview",
  props: {
    text: String,
    rating: {
      type: Number,
      required: true
    }
  },

  methods: {
    updateRating(newRating) {
      this.$emit('update:rating', newRating);
    }
  }

}
</script>

<style scoped>


.review {
  font-size: 16px;
  border: 1px solid white;
  border-radius: 70px 70px 15px 100px;
  padding: 40px;
}

#change-rating {
  margin-left: 4px;
  margin-bottom: 10px;
}

.crud-buttons ul {
  list-style: none;
  display: flex;
  padding: 0px;
}

.crud-buttons li {
  margin: 5px;
}

</style>