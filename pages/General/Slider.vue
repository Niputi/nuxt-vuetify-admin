<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <v-widget title="Basic Usage">
          <div slot="widget-content">
            <v-subheader>Default</v-subheader>
            <div class="container">
              <div class="layout column">
                <div class="flex">
                  <v-slider v-model="slider1" step="0"></v-slider>
                </div>
              </div>
            </div>
            <v-subheader>Disabled</v-subheader>
            <div class="container">
              <div class="layout column">
                <div class="flex">
                  <v-slider v-model="slider2" step="0" disabled></v-slider>
                </div>
              </div>
            </div>
            <v-subheader>Concreate step (Drag the slider) </v-subheader>
            <div class="container">
              <div class="layout column">
                <div class="flex">
                  <v-slider
                    v-model="slider3"
                    placeholder="step"
                    color="pink"
                    :max="255"
                    thumb-label
                    step="10"
                    ticks
                  ></v-slider>
                </div>
              </div>
            </div>
            <v-subheader>With Icon </v-subheader>
            <div class="container">
              <div class="layout column">
                <div class="flex">
                  <v-slider
                    v-model="media1"
                    prepend-icon="volume_up"
                  ></v-slider>
                  <v-slider
                    v-model="media2"
                    prepend-icon="volume_down"
                  ></v-slider>
                </div>
              </div>
            </div>
            <v-subheader>Custom color</v-subheader>
            <div class="container">
              <div class="layout column">
                <div class="flex">
                  <v-slider
                    v-model="ex1.val"
                    :label="ex1.label"
                    :color="ex1.color"
                  ></v-slider>
                  <v-slider
                    v-model="ex2.val"
                    :label="ex2.label"
                    :track-color="ex2.color"
                  ></v-slider>
                  <v-slider
                    v-model="ex3.val"
                    :label="ex3.label"
                    :thumb-color="ex3.color"
                    thumb-label
                  ></v-slider>
                </div>
              </div>
            </div>
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
      slider1: 0,
      slider2: 0,
      slider3: 0,
      media1: 0,
      media2: 0,
      ex1: { label: "color", val: 25, color: "orange darken-3" },
      ex2: { label: "track-color", val: 75, color: "green lighten-1" },
      ex3: { label: "thumb-color", val: 50, color: "red" }
    };
  }
};
</script>
