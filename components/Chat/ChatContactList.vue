<template>
  <div class="chat-contact">
    <v-text-field
      solo
      clearable
      prepend-inner-icon="mdi-magnify"
      hide-details
      label="Search"
      @input="handleSearch"
    ></v-text-field>
    <v-divider></v-divider>
    <v-list two-line class="chat-contact--list">
      <v-subheader>Contacts</v-subheader>
      <template v-for="(item, index) in users">
        <v-divider :key="index"></v-divider>
        <v-list-item :key="item.name + index" :to="contactRoute(item.uuid)">
          <v-list-item-avatar color="primary">
            <img v-if="item.avatar" :src="item.avatar" />
            <span v-else class="white--text headline">{{
              firstLetter(item.name)
            }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.jobTitle }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-circle dot small :color="userStatusColor(item)"></v-circle>
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </div>
</template>

<script>
import { getUser } from "@/data/user";
import VCircle from "@/components/Circle/VCircle";
export default {
  layout: "Chat",
  components: {
    VCircle
  },
  data() {
    return {
      users: getUser()
    };
  },
  computed: {},
  methods: {
    contactRoute(id) {
      return "/chat/contacts/" + id;
    },
    firstLetter(name) {
      return name.charAt(0);
    },
    userStatusColor(item) {
      return item.active ? "green" : "grey";
    },
    handleSearch(q) {
      if (q.length > 3) {
        this.users.filter(u => {
          const name = u.name.toLowerCase();
          return name.startsWith(q) === true;
        });
      }
    }
  }
};
</script>
