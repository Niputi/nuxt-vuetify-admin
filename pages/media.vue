<template>
  <div class="media">
    <v-toolbar class="elevation-0 transparent media-toolbar">
      <v-btn-toggle>
        <v-btn text>
          <v-icon color="primary">mdi-cloud-upload</v-icon>
          &nbsp;Upload
        </v-btn>
        <v-btn text>
          <v-icon color="primary">mdi-folder</v-icon>
          &nbsp; Add Folder
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="view">
        <v-btn text value="list">
          <v-icon color="primary">mdi-view-headline</v-icon>
        </v-btn>
        <v-btn text value="grid">
          <v-icon color="primary">mdi-format-list-bulleted</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="layout row media-layout">
      <div class="media-content flex transparent">
        <v-container v-if="view === 'grid'" fluid>
          <v-layout row wrap class="x-grid-lg">
            <v-flex
              v-for="(item, index) in folders"
              :key="'folder' + index"
              lg4
              sm12
              xs12
              class="pa-2"
            >
              <v-card text tile>
                <v-responsive height="150px">
                  <v-icon size="135" class="mx-auto" color="indigo"
                    >mdi-folder</v-icon
                  >
                </v-responsive>
                <v-divider></v-divider>
                <v-card-title> {{ item.name }} </v-card-title>
              </v-card>
            </v-flex>
            <v-flex
              v-for="(item, index) in files"
              :key="index"
              lg4
              sm12
              xs12
              class="pa-2"
            >
              <v-card text tile @click="showDetail(item)">
                <v-responsive height="150px" class="card-media">
                  <img v-if="isImage(item)" :src="item.path" alt="" />
                  <v-icon v-else class="mx-auto" size="135">mdi-folder</v-icon>
                </v-responsive>
                <v-divider></v-divider>
                <v-card-title> {{ item.fileName }} </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-layout v-else column>
          <v-list dense class="transparent">
            <v-list-item
              v-for="(item, index) in files"
              :key="'list-file-' + index"
              @click="showDetail(item)"
            >
              <v-list-item-avatar>
                <v-icon>{{ mimeIcons(item) }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="container pl-0">
                  <div class="layout row">
                    <div class="flex">{{ item.fileName }}</div>
                    <v-spacer></v-spacer>
                    <div class="caption">
                      {{ item ? formateDate(item.ctime) : "" }}
                    </div>
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
import { getFileMenu, getFile } from "@/data/file";
export default {
  props: {
    type: {
      type: String,
      default: "image"
    }
  },
  data: () => ({
    size: "lg",
    view: "grid",
    selectedFile: {
      path: "/icon/empty_file.svg"
    },
    imageMime: ["image/jpeg", "image/png", "image/svg+xml"],

    folders: [
      {
        name: "bg",
        lastModified: "2018-03-03"
      },
      {
        name: "cards",
        lastModified: "2018-03-03"
      },
      {
        name: "avatar",
        lastModified: "2018-03-03"
      }
    ]
  }),
  computed: {
    mediaMenu() {
      return getFileMenu;
    },
    files() {
      return getFile();
    }
  },

  methods: {
    isImage(file) {
      return this.imageMime.includes(file.fileType);
    },
    mimeIcons(file) {
      return this.imageMime.includes(file.fileType)
        ? "image"
        : "insert_drive_file";
    },
    showDetail(file) {
      this.selectedFile = file;
    },
    formateDate(string) {
      return string ? new Date(string).toLocaleDateString() : "";
    },
    computeFileImage(file) {
      return this.isImage(file) ? file.path : "/icon/file_empty.svg";
    }
  }
};
</script>

<style lang="sass" scoped>
.card-media img
    width: 100%
.media
  &-cotent--wrap, &-menu
    min-width: 260px
    border-right: 1px solid #eee
    min-height: calc(100vh - 50px - 64px)
  &-detail
    min-width: 300px
    border-left: 1px solid #eee
</style>
