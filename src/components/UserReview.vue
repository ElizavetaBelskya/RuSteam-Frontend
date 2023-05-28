<template>
  <div class = "review">
    <h6>Ваша оценка приложения</h6>
    <v-rating
        :v-model="apprating"
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
    rating: Number
  },
  data() {
    return {
      apprating: this.rating
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
  font-size: 18px;
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
  padding: 0;
}

.crud-buttons li {
  margin: 5px;
}

@media (max-width: 500px) {
  .review {
    margin-top: 25px;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 15px 15px 15px 15px;
    padding: 30px;
  }

  .review h6 {
    font-size: 20px;
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


}

</style>