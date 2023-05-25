<template>
  <div class = "review">
    <h6>{{ nickname }}</h6>
    <v-rating
        v-model="apprating"
        readonly
        bg-color="orange-lighten-1"
        color="blue"
    ></v-rating>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "ReviewForDescription",
  props: {
    text: String,
    nickname: String,
    rating: Number
  },
  data() {
    return {
      apprating: this.rating
    };
  }
}
</script>

<style scoped>


.review {
  font-size: 18px;
  border: 1px solid white;
  border-radius: 70px 70px 15px 100px;
  padding: 30px;
}

.review h6 {
  padding-left: 15px;
}

.review p {
  padding-left: 15px;
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