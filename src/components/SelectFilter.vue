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
        @update:modelValue="update"
    >

    </v-select>
  </div>
</template>

<script>


export default {
  name: "SelectFilter",
  data () {
    return {
      select: { state: 'Любые' },
      items: [
        { state: 'Любые' },
        { state: 'Шутеры' },
        { state: 'Аркады' },
        { state: 'Бизнес' },
      ],
    }
  },
  methods: {
    update() {
      this.$emit('updated', this.select);
    },
  }
}
</script>

<style scoped>

</style>
