<template>
  <v-card>
    <v-toolbar v-if="enableHeader" color="transparent" flat dense card>
      <v-toolbar-title
        ><h4>{{ title }}</h4></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <slot name="widget-header-action"></slot>
    </v-toolbar>
    <v-divider v-if="enableHeader"></v-divider>
    <v-card-text :class="contentBg">
      <slot name="widget-content"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "VWidget",
  props: {
    title: {
      type: String,
      default: ""
    },
    enableHeader: {
      type: Boolean,
      default: true
    },
    contentBg: {
      type: String,
      default: "dark"
    }
  }
};
</script>
