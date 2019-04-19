<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg6 sm12 xs12>
        <v-widget title="Basic Usage">
          <div slot="widget-content">
            <v-carousel>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              ></v-carousel-item>
            </v-carousel>
          </div>
        </v-widget>
      </v-flex>
      <v-flex lg6 sm12 xs12>
        <v-widget title="Hide Controls">
          <div slot="widget-content">
            <v-carousel hide-controls hide-delimiters>
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
              >
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VWidget from "@/components/VWidget";
export default {
  components: {
    VWidget
  },
  asyncData() {
    return {
      items: [
        {
          src: "https://placeimg.com/640/480/tech"
        },
        {
          src: "https://placeimg.com/640/480/nature"
        },
        {
          src: "https://placeimg.com/640/480/animals"
        },
        {
          src: "https://placeimg.com/640/480/grayscale"
        }
      ]
    };
  }
};
</script>
