<template>
  <v-app id="inspire" class="app dashboard">
    <app-drawer class="app--drawer" :show-drawer="showDrawer" />
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisiable" />
    <v-content>
      <!-- Page Header -->
      <div class="page-wrapper">
        <nuxt />
      </div>
      <!-- App Footer -->
      <v-footer height="auto" class="white pa-3 app--footer">
        <span>Niputi Design &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer />
        <span class="caption mr-1">Made With Love</span>
        <v-icon color="pink" small>mdi-heart</v-icon>
      </v-footer>
    </v-content>
    <!-- Go to top -->
    <app-fab />
  </v-app>
</template>

<script>
import AppDrawer from "@/components/AppDrawer";
import AppToolbar from "@/components/AppToolbar";

export default {
  components: {
    AppDrawer,
    AppToolbar
  },
  data() {
    return {
      showDrawer: true
    };
  },
  created() {},
  methods: {
    handleDrawerVisiable() {
      this.showDrawer = !this.showDrawer;
    }
  }
};
</script>

<style lang="sass" scoped>
.page-wrapper
  min-height: calc(100vh - 64px - 50px - 81px)
</style>
