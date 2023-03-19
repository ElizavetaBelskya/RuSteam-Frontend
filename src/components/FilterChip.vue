<template>
    <div class="text-center">
      <v-chip
          v-if="chip"
          class="ma-2"
          closable
          @click:close="chip = false"
      >
        {{ titlePositive }}
      </v-chip>

      <v-btn variant="outlined"
          v-if="!chip"
          close
          dark
          @click="chip = true"
      >
        {{ titleNegative }}
      </v-btn>
    </div>

</template>

<script>

export default {
  name: "FilterChip",
  props: {
    titlePositive : String,
    titleNegative : String
  },
  data () {
    return {
      chip: false,
    }
  }
}
</script>

<style scoped>
* {
  font-size: 14px;
}
</style>