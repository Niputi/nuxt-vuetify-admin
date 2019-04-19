<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h4>Mini Name Card</h4>
      </v-flex>
      <v-flex v-for="(item, index) in users" :key="'mini' + index" lg3 sm12>
        <name-card mini v-bind="item"> </name-card>
      </v-flex>
      <v-flex sm12>
        <h4>Basic Name Card</h4>
      </v-flex>
      <v-flex v-for="(item, index) in users" :key="'basic' + index" lg3 sm12>
        <name-card v-bind="item"> </name-card>
      </v-flex>
      <v-flex sm12>
        <h4>Basic Name Card with top nav</h4>
      </v-flex>
      <v-flex
        v-for="(item, index) in users"
        :key="'basic-top-nav' + index"
        lg3
        sm12
      >
        <name-card top-nav v-bind="item"> </name-card>
      </v-flex>
      <v-flex sm12>
        <h4>Bottom Nav Name Card</h4>
      </v-flex>
      <v-flex
        v-for="(item, index) in users"
        :key="'bottom-nav' + index"
        lg3
        sm12
      >
        <name-card bottom-nav v-bind="item"> </name-card>
      </v-flex>
      <v-flex sm12>
        <h4>Contact Card</h4>
      </v-flex>
      <v-flex lg4 sm12>
        <profile-card></profile-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NameCard from "@/components/Widgets/Card/NameCard";
import ProfileCard from "@/components/Widgets/Card/ProfileCard";
export default {
  components: {
    NameCard,
    ProfileCard
  },
  data() {
    return {
      users: [
        {
          jobTitle: "Web Developer",
          name: "Michael Wang",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/1.jpg",
            size: "36"
          }
        },
        {
          jobTitle: "Web Designer",
          name: "Jessie J",
          color: "pink",
          dark: true,
          avatar: {
            src: "https://randomuser.me/api/portraits/women/1.jpg",
            size: "36"
          }
        },
        {
          jobTitle: "Web Developer",
          name: "Jim J",
          color: "teal",
          dark: true,
          avatar: {
            src: "https://randomuser.me/api/portraits/men/10.jpg",
            size: "36"
          }
        },
        {
          jobTitle: "Product Manager",
          name: "John Doe",
          dark: true,
          cardBgImage: "https://placeimg.com/640/480/nature",
          avatar: {
            src: "https://randomuser.me/api/portraits/men/5.jpg",
            size: "36"
          }
        }
      ]
    };
  }
};
</script>
