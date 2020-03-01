<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click="handleDrawerToggle" />
    <v-spacer />
    <v-toolbar-items>
      <v-btn icon href="https://github.com/tookit/vue-material-admin">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
      <v-menu
        offset-y
        origin="center center"
        class="elelvation-1"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn slot="activator" icon text v-on="on">
            <v-badge color="red" overlap>
              <span slot="badge">4</span>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <notification-list></notification-list>
      </v-menu>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn slot="activator" icon large text v-on="on">
            <v-avatar size="30px">
              <img
                src="https://randomuser.me/api/portraits/men/84.jpg"
                alt="Michael Wang"
              />
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-for="(item, index) in profileMenus"
            :key="index"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            @click="item.click"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar slot="extension" dense color="white" light>
      <v-icon>mdi-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="pa-3"></v-breadcrumbs>
      <v-spacer></v-spacer>
      <v-btn icon small color="black">
        <v-icon @click="handleGoBack" v-text="'mdi-arrow-left'" />
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import NotificationList from "@/components/Widgets/List/NotificationList";
export default {
  components: {
    NotificationList
  },
  data: () => ({
    profileMenus: [
      {
        icon: "mdi-account",
        href: "#",
        title: "Profile"
      },
      {
        icon: "mdi-cogs",
        href: "#",
        title: "Settings"
      },
      {
        icon: "mdi-logout-variant",
        href: "#",
        title: "Logout"
      }
    ]
  }),
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    drawer: {
      get() {
        return this.$store.state.sidebar;
      },
      set(val) {
        this.$store.commit("SIDEBAR", val);
      }
    },
    breadcrumbs() {
      const items = [
        {
          text: "Home",
          to: { path: "/" }
        }
      ];
      if (["/"].includes(this.$route.path) === false) {
        items.push({
          text: this.$route.name,
          to: { path: this.$route.path }
        });
      }
      return items;
    }
  },
  methods: {
    handleDrawerToggle() {
      this.$emit("side-icon-click");
    },
    handleLogut() {
      this.$router.push("/auth/login");
    },
    handleSetting() {},
    handleProfile() {},
    handleGoBack() {
      this.$router.go(-1);
    },
    handleFullScreen() {
      const doc = window.document;
      const docEl = doc.documentElement;
      const requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
      const cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen;
      if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
      ) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }
    }
  }
};
</script>
