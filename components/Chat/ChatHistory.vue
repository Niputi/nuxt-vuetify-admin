<template>
  <div class="chat-history">
    <v-text-field
      solo
      clearable
      hide-details
      prepend-inner-icon="mdi-search"
      label="Search"
    ></v-text-field>
    <v-divider></v-divider>
    <v-list two-line class="chat-history--list">
      <v-subheader>History</v-subheader>
      <template v-for="(item, index) in chats">
        <v-divider :key="index"></v-divider>
        <v-list-item
          :key="item.title + index"
          class="chat-list"
          :to="chatRoute(item.uuid)"
        >
          <v-list-item-avatar :color="randomAvatarColor(item)">
            <img v-if="item.users.length === 1" :src="item.user.avatar" />
            <span v-else class="white--text headline">{{
              firstLetter(item.title)
            }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ computeTitle(item) }}</v-list-item-title>
            <v-list-item-subtitle>Some Latest message</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>{{
              formatChatTime(item.created_at)
            }}</v-list-item-action-text>
            <v-circle dot small :color="chatStatusColor(item)"></v-circle>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
import { Groups } from "@/data/chat";
import { getUserById } from "@/data/user";
import VCircle from "@/components/Circle/VCircle";
import Util from "@/util";
export default {
  components: {
    VCircle
  },

  data: () => ({
    chats: Groups
  }),

  methods: {
    chatRoute(id) {
      return "/chat/messaging/" + id;
    },
    firstLetter(title) {
      return title.charAt(0);
    },
    formatChatTime(s) {
      return new Date(s).toLocaleDateString();
    },
    computeTitle(item) {
      const username =
        item.users.length === 1 ? getUserById(item.users[0]).username : "";
      return item.users.length === 1 ? username : item.title;
    },
    randomAvatarColor(item) {
      return item.users.length === 1
        ? ""
        : Util.randomElement(["blue", "indigo", "success", "error", "pink"]);
    },

    chatStatusColor(item) {
      console.log(item);
      return Util.randomElement(["blue", "indigo", "success", "error", "pink"]);
    }
  }
};
</script>
