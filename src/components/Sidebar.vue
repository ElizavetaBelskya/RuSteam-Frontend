<template>
      <v-card>
        <v-layout>
          <v-navigation-drawer
              expand-on-hover
              rail
              app color="#42268644"
          >
            <v-list>
              <v-list-item
                  prepend-avatar="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  :title="name"
                  :subtitle="role"
              ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>

              <v-list-item prepend-icon="mdi-account-multiple" title= "Мой профиль" :href="profileHref" value="shared">

              </v-list-item>

              <v-list-item prepend-icon="mdi-star" title="Все приложения" href="/" value="Все приложения"></v-list-item>

            </v-list>
          </v-navigation-drawer>

        </v-layout>
      </v-card>

</template>

<script>

export default {
  name: "RusteamSidebar",
  props: {
    name: String,
    role: String,
    profileHref: String
  }
}
</script>

<style scoped>
.v-navigation-drawer .v-list-item {
  color: white;
}

</style>