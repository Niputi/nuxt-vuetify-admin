<template>
  <v-app class="chat">
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-navigation-drawer
        class="pa-0 chat-drawer primary"
        fixed
        permanent
        app
        width="68"
      >
        <chat-menu :items="menus" class="chat-drawer--menu"> </chat-menu>
      </v-navigation-drawer>
      <v-content class="chat-main">
        <nuxt />
      </v-content>
    </template>
    <template v-else>
      <v-toolbar color="primary" fixed dark>
        <v-btn icon @click="handleClick">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content class="chat-main">
        <transition>
          <nuxt />
        </transition>
      </v-content>
      <v-bottom-navigation
        v-if="!hideBottomNav"
        :value="true"
        absolute
        color="primary"
        app
        fixed
      >
        <v-btn
          v-for="(item, index) in menus"
          :key="index"
          dark
          text
          :value="item.to.path"
          :to="item.to"
        >
          <span>{{ item.text }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </template>
  </v-app>
</template>

<script>
import API from "@/data";
import ChatMenu from "@/components/Chat/ChatMenu";
export default {
  components: {
    ChatMenu
  },
  data: () => ({
    menus: API.getChatMenu
  }),
  computed: {
    hideBottomNav() {
      return (
        this.$route.params.uuid !== undefined &&
        this.$route.name === "ChatMessaging"
      );
    }
  },
  methods: {
    handleClick() {
      this.$router.go(-1);
    }
  }
};
</script>
