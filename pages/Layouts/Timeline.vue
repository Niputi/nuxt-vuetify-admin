<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <v-widget title="Complex" content-bg="lighten-4">
          <div slot="widget-content">
            <ol class="timeline timeline-point-lg">
              <li class="timeline-period">
                <time>Today</time>
              </li>
              <li class="timeline-block">
                <div class="timeline-content">
                  <v-card dark color="blue">
                    <v-card-text>
                      Authoritatively syndicate goal-oriented leadership skills
                      for clicks mortar outsourcing synergistically
                      reconceptualize enabled.
                    </v-card-text>
                  </v-card>
                </div>
                <div class="timeline-point">
                  <v-avatar>
                    <img src="/avatar/me.jpeg" alt="" />
                  </v-avatar>
                </div>
                <div class="timeline-detail">
                  <time datetime="2018" class="caption">Just now</time>
                  <p>Michael update his status.</p>
                </div>
              </li>
              <li class="timeline-block">
                <div class="timeline-content">
                  <v-card class="elevation-1">
                    <v-card-text class="pa-0">
                      <v-container grid-list-md>
                        <div class="layout row align-center ma-0">
                          <v-avatar class="mx-auto" color="info">
                            <img src="/avatar/a1.jpg" />
                          </v-avatar>
                          <div class="text-center flex ml-2">
                            <div class="subheading">John Doe</div>
                            <span class="caption">Web Developer</span>
                          </div>
                        </div>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </div>
                <div class="timeline-point">
                  <v-avatar class="indigo">
                    <v-icon dark>account_circle</v-icon>
                  </v-avatar>
                </div>
                <div class="timeline-detail">
                  <time datetime="2018" class="caption">4 hours agon</time>
                  <p>New friend request</p>
                </div>
              </li>
              <li class="timeline-block">
                <div class="timeline-content">
                  <v-card>
                    <v-img src="/bg/5.jpg" height="200px"> </v-img>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline">Top western road trips</div>
                        <span class="grey--text">1,000 miles of wonder</span>
                      </div>
                    </v-card-title>
                  </v-card>
                </div>
                <div class="timeline-point">
                  <v-avatar>
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt=""
                    />
                  </v-avatar>
                </div>
                <div class="timeline-detail">
                  <time datetime="2018" class="caption">1 Day ago</time>
                  <p>John doe post a picture</p>
                </div>
              </li>
            </ol>
          </div>
        </v-widget>
      </v-flex>
      <v-flex sm12>
        <v-widget title="Basic Usage" content-bg="white">
          <div slot="widget-content">
            <ol
              class="timeline timeline-activity timeline-point-sm timeline-content-right"
            >
              <li
                v-for="(item, index) in activity"
                :key="index"
                class="timeline-block"
              >
                <div class="timeline-point">
                  <v-circle dot large :color="item.color"></v-circle>
                </div>
                <div class="timeline-content">
                  <time datetime="2018" class="caption">{{
                    item.timeString
                  }}</time>
                  <div v-html="item.text"></div>
                </div>
              </li>
            </ol>
          </div>
        </v-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VWidget from "@/components/VWidget";
import API from "@/data";
import VCircle from "@/components/Circle/VCircle.js";
export default {
  components: {
    VWidget,
    VCircle
  },
  data() {
    return {};
  },
  computed: {
    activity() {
      return API.getActivity();
    }
  }
};
</script>
