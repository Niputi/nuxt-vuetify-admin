<template>
  <v-card>
    <v-responsive
      src="/static/nature/n3.jpeg"
      :height="imageHeight"
      class="white--text"
    >
      <v-layout row justify-space-between class="ma-0">
        <v-flex xs2> <v-icon color="white">mdi-heart</v-icon> </v-flex>
        <v-flex xs2 class="text-sm-right">
          <v-icon color="white">mdi-share</v-icon>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-card-text>
      <div class="post--item">
        <div class="post--title">
          <h3 class="title">{{ title }}</h3>
        </div>
        <div class="post--meta grey--text text--darken-1 caption my-3">
          <span class="mr-3">{{ author }}</span> <time>{{ createdAt }}</time>
        </div>
        <div class="post--desc text--secondary">{{ desc }}</div>
        <div class="post--action align-center justify-space-between mt-2">
          <div class="social">
            <a class="grey--text" @click="handleThumb">
              <v-icon small>mdi-thumb-up</v-icon>
              <small>100+</small>
            </a>
            <a class="grey--text mx-3" @click="handleComment">
              <v-icon small>mdi-comment</v-icon>
              <small>12+</small>
            </a>
            <a class="grey--text " @click="handleFavorite">
              <v-icon small>mdi-heart</v-icon>
              <small>50+</small>
            </a>
          </div>
          <v-btn outlined text color="primary"> More </v-btn>
        </div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-app-bar text color="white">
      <v-text-field
        text
        solo
        label="Comment here"
        append-icon="photo_camera"
        hide-details=""
      ></v-text-field>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  /* eslint-disable vue/require-default-prop */
  props: {
    featuredImage: { type: String },
    imageHeight: { type: [String, Number], default: "350" },
    author: { type: String },
    title: { type: String },
    desc: { type: String },
    createdAt: { type: String }
  },

  methods: {
    handleThumb() {
      // implement your own method here
    },
    handleComment() {
      // implement your own method here
    },
    handleFavorite() {
      // implement your own method here
    }
  }
};
</script>
