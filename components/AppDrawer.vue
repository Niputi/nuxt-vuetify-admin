<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    class="app--drawer"
    :mini-variant.sync="mini"
    :width="drawWidth"
    :dark="$vuetify.dark"
  >
    <v-toolbar color="primary darken-1" dark>
      <img
        src="https://via.placeholder.com/36/000000/FFFFFF/?text=TMP"
        height="36"
        alt="placeholder image"
      />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-list expand dense nav>
      <template v-for="(item, i) in items">
        <v-subheader
          v-if="item.header"
          :key="`subheader-${i}`"
          v-text="item.header"
        />
        <v-divider v-else-if="item.divider" :key="`divider-${i}`" />
        <list-group v-else-if="item.group" :key="`group-${i}`" :item="item" />
        <list-item
          v-else
          :key="`item-${i}`"
          :icon="item.icon"
          :subtext="item.subtext"
          :text="item.text"
          :to="item.to"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import menu from "@/data/menu";
import ListGroup from "@/components/List/Group";
import ListItem from "@/components/List/Item";

export default {
  components: {
    ListGroup,
    ListItem
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    drawWidth: {
      type: Number,
      default: 260
    },
    showDrawer: Boolean
  },
  data: () => ({
    mini: false,
    items: menu,
    drawer: true
  }),
  watch: {
    showDrawer: {
      handler(val) {
        this.drawer = val;
      },
      immediate: true
    }
  }
};
</script>

<style lang="sass" scoped>
.app--drawer
  overflow: hidden !important

  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
