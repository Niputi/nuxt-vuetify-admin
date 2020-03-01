<template>
  <v-card class="chat-room">
    <v-app-bar text dense class="white chat-room--toolbar" light>
      <v-btn icon>
        <v-icon color="text--secondary">mdi-chevron-left</v-icon>
      </v-btn>
      <template v-if="chat.users">
        <v-avatar
          v-for="(user_id, index) in chat.users"
          :key="index"
          size="32"
          class="avatar-stack"
        >
          <img :src="getAvatar(user_id)" alt="" />
        </v-avatar>
      </template>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <h4>Chat Channel</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn slot="activator" icon v-on="on">
            <v-icon color="text--secondary">mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Add user</span>
      </v-tooltip>
    </v-app-bar>
    <v-card-text class="chat-room--list pa-3">
      <template v-for="(item, index) in chat.messages">
        <div
          :key="index"
          :class="[index % 2 == 0 ? 'reverse' : '']"
          class="messaging-item layout row my-4"
        >
          <v-avatar class="indigo mx-1" size="40">
            <img :src="item.user.avatar" alt="" />
          </v-avatar>
          <div class="messaging--body layout column mx-2">
            <p
              :value="true"
              :class="[index % 2 == 0 ? 'primary white--text' : 'white']"
              class="pa-2"
            >
              {{ item.text }}
            </p>
            <div class="caption px-2 text--secondary">
              {{ new Date(item.created_at).toLocaleString() }}
            </div>
          </div>
          <v-spacer></v-spacer>
        </div>
      </template>
    </v-card-text>
    <v-card-actions class="pa-0">
      <v-text-field
        full-width
        text
        clearable
        solo
        hide-details
        append-icon="mdi-send"
        label="Type some message here"
      >
        <v-icon slot="append-icon">mdi-send</v-icon>
        <v-icon slot="append-icon" class="mx-2">mdi-image</v-icon>
        <v-icon slot="append-icon">mdi-face</v-icon>
      </v-text-field>
    </v-card-actions>
  </v-card>
</template>
<script>
import { getChatById } from "@/data/chat";
import { getUserById } from "@/data/user";
export default {
  props: {
    uuid: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: null
    }
  },
  computed: {
    chat() {
      const chatOrigin = {
        title: "Chat",
        users: [],
        messages: []
      };
      const chat = getChatById(this.$route.params.uuid);
      return Object.assign(chatOrigin, chat);
    },
    computeHeight() {
      return {
        height: this.height || ""
      };
    }
  },

  methods: {
    getAvatar(uid) {
      return getUserById(uid).avatar;
    }
  }
};
</script>

<style lang="sass" scoped>
.chat-room--scrollbar
  height: calc(100vh - 48px - 56px)
</style>
