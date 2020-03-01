<template>
  <v-list-group
    :group="item.group"
    :prepend-icon="item.icon"
    :sub-group="subGroup"
    no-action
    :value="active"
  >
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, i) in children">
      <list-sub-group
        v-if="child.group != null"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <list-item
        v-else
        :key="`item-${i}`"
        :icon="child.icon"
        :subtext="child.subtext"
        :to="child.to"
        :text="child.text"
      />
    </template>
  </v-list-group>
</template>

<script>
// Utilities
import ListItem from "./Item";
export default {
  components: {
    ListItem
  },
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      default: () => ({
        text: "",
        group: "",
        children: []
      })
    },
    subGroup: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    children() {
      return this.item.children.map(item => ({
        ...item,
        to: item.to
      }));
    },
    active() {
      const found = this.item.children.filter(
        item => item.to === this.$route.path
      );
      return found.length > 0;
    }
  }
};
</script>
