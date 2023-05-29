<template>
  <div class = "review">
    <h6>Ваша оценка приложения</h6>
    <v-rating
        v-model="apprating"
        bg-color="orange-lighten-1"
        color="blue"
    ></v-rating>
    <h6>Ваш отзыв о приложении</h6>
    <p>{{ text }}</p>
    <div class="crud-buttons">
      <ul>
        <li>
        <div id = "change-rating">
          <ReviewDialog @review-updated="updateReview" :id="id" :application-id="applicationId" :status="status" :rating = "apprating" :text = "text"/>
        </div>
        </li>
        <li>
          <button v-if="deleteButton" type="button" @click="deleteReview" ref="deleteBtn" class="btn btn-outline-info">Удалить</button>
          <button v-if="recoverButton" type="button" @click="recoverReview" ref="recoverBtn" class="btn btn-outline-info">Восстановить</button>
        </li>
        <li>
          <button v-if="publishButton" type="button" @click="publishReview" ref="publishBtn" class="btn btn-outline-info">Опубликовать</button>
          <button v-if="unpublishButton" type="button" @click="unpublishReview" ref="unpublishBtn" class="btn btn-outline-info">Убрать из публикации</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ReviewDialog from "@/components/ReviewDialog.vue";

export default {
  name: "UserReview",
  components: {ReviewDialog},
  props: {
    id: Number,
    text: String,
    rating: Number,
    status: String,
    applicationId: Number
  },
  data() {
    return {
      deleteButton: false,
      recoverButton: false,
      publishButton: false,
      unpublishButton: false,
      apprating: this.rating
    }
  },
  created() {
    this.changeStatus()
  },
  methods: {
    async deleteReview() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('reviews/' + this.id + '/update_status?status=DELETED');
      this.$emit('review-updated');
    },
    async recoverReview() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('reviews/' +this.id + '/update_status?status=DRAFT');
      this.$emit('review-updated');
    },
    async publishReview() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('reviews/' + this.id + '/update_status?status=ACTIVE');
      this.$emit('review-updated');
    },
    async unpublishReview() {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
      await axios.put('reviews/' + this.id + '/update_status?status=DRAFT');
      this.$emit('review-updated');
    },
    async updateReview() {
      this.$emit('review-updated');
    },
    changeStatus() {
      if (this.status === "DELETED") {
        this.recoverButton = true
      } else if (this.status === "DRAFT") {
        this.deleteButton = true
        this.publishButton = true
      } else if (this.status === "ACTIVE") {
        this.deleteButton = true
        this.unpublishButton = true
      }
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