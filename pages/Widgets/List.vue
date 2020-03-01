<template>
  <div id="social">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <message-list />
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <notification-list />
        </v-flex>
        <v-flex lg7 sm12 xs12>
          <plain-table />
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order />
        </v-flex>
        <v-flex lg12 sm12 xs12>
          <post-list-card :items="posts"></post-list-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getPost } from "@/data/post";
import MessageList from "@/components/Widgets/List/MessageList";
import NotificationList from "@/components/Widgets/List/NotificationList";
import PlainTable from "@/components/Widgets/List/PlainTable";
import PlainTableOrder from "@/components/Widgets/List/PlainTableOrder";
import PostListCard from "@/components/Widgets/Card/PostListCard";
export default {
  components: {
    PostListCard,
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  },
  computed: {
    posts() {
      return getPost();
    }
  },
  methods: {
    handleClick: e => {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }
};
</script>
