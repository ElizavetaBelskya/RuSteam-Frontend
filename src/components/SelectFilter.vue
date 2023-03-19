<template>
  <div id="root">
    <v-select
        v-model="select"
        :items="items"
        item-title="state"
        item-value="state"
        label="Select"
        persistent-hint
        return-object
        single-line
    >

    </v-select>
  </div>
</template>

<script>


export default {
  name: "SelectFilter",
  data () {
    return {
      select: { state: 'Cоциальные сети' },
      items: [
        { state: 'Cоциальные сети'},
        { state: 'Образование'},
        { state: 'Здоровье' },
        { state: 'Финансы' },
        { state: 'Игры' },
      ],
    }
  },
}
</script>

<style scoped>

</style>
