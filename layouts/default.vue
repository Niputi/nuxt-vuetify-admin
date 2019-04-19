<template>
  <div>
    <v-app dark>
      <app-drawer class="app--drawer"></app-drawer>
      <app-toolbar class="app--toolbar"></app-toolbar>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <!-- App Footer -->
      <v-footer class="pa-3 app--footer">
        <span class="caption">
          Niputi &copy; {{ new Date().getFullYear() }}
        </span>
        <v-spacer></v-spacer>
        <span class="caption mr-1">Make With Love</span>
        <v-icon color="pink" small>favorite</v-icon>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import AppDrawer from "../components/AppDrawer";
import AppToolbar from "../components/AppToolbar";
export default {
  components: {
    AppDrawer,
    AppToolbar
  },
  asyncData: () => ({
    expanded: true,
    rightDrawer: false,
    snackbar: {
      show: false,
      text: "",
      color: ""
    }
  })
};
</script>

<style scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}
.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}
</style>
