<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex lg12 sm12>
        <v-widget title="Basic Usage">
          <section slot="widget-content">
            <v-container fluid>
              <v-layout row wrap>
                <v-flex xs12 class="text-xs-center">
                  <v-menu
                    offset-y
                    :nudge-bottom="nudge.bottom"
                    :nudge-left="nudge.left"
                    :nudge-right="nudge.right"
                    :nudge-top="nudge.top"
                  >
                    <v-btn slot="activator" dark color="primary">
                      Menu Offset Bottom
                    </v-btn>
                    <v-list>
                      <v-list-tile
                        v-for="(item, key) in items"
                        :key="key"
                        @click="handleClick"
                      >
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                  <v-menu offset-y top>
                    <v-btn slot="activator" dark color="primary">
                      Menu Offset Top
                    </v-btn>
                    <v-list>
                      <v-list-tile
                        v-for="(item, key) in items"
                        :key="key"
                        @click="handleClick"
                      >
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile>
                    </v-list>
                  </v-menu>
                </v-flex>
                <v-flex xs12>
                  <v-slider
                    v-model="nudge.top"
                    label="Top offset"
                    :max="50"
                  ></v-slider>
                </v-flex>
                <v-flex xs12>
                  <v-slider
                    v-model="nudge.bottom"
                    label="Bottom offset"
                    :max="50"
                  ></v-slider>
                </v-flex>
                <v-flex xs12>
                  <v-slider
                    v-model="nudge.left"
                    label="Left offset"
                    :max="50"
                  ></v-slider>
                </v-flex>
                <v-flex xs12>
                  <v-slider
                    v-model="nudge.right"
                    label="Right offset"
                    :max="50"
                  ></v-slider>
                </v-flex>
              </v-layout>
            </v-container>
          </section>
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
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      nudge: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }
    };
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
    }
  }
};
</script>
