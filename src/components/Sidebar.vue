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
                  title="Username"
                  subtitle="Status"
              ></v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list density="compact" nav>

              <v-list-item prepend-icon="mdi-account-multiple" title= "Мои приложения" value="shared"></v-list-item>

              <v-list-item prepend-icon="mdi-star" title="Все приложения" value="Все приложения"></v-list-item>

              <v-list-item color="white" prepend-icon="mdi-star" title="Акции" value="Акции"></v-list-item>

              <v-list-item color="white" prepend-icon="mdi-star-circle" title="Хиты" value="Хиты"></v-list-item>
            </v-list>
          </v-navigation-drawer>

        </v-layout>
      </v-card>

</template>

<script>
export default {
  name: "RusteamSidebar"
}
</script>

<style scoped>
.v-navigation-drawer .v-list-item {
  color: white;
}

</style>