<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
            permanent
            location="right"
        >
          <template v-slot:prepend>
            <v-list-item
                lines="one"
                title="Игры"
            ></v-list-item>
          </template>
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Для Windows" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Для Android" value="account"></v-list-item>
          </v-list>

        </v-navigation-drawer>
      </v-layout>
    </v-card>
</template>

<script>
export default {
  name: "AppGenres"
}
</script>

<style scoped>

</style>