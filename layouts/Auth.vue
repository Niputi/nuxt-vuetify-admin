<template>
  <v-app class="primary split-bg">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <nuxt />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<style lang="sass" scoped>
.split-bg
  height: 50%
  width: 100%
  position: absolute
  top: 0
  left: 0
  content: ""
  z-index: 0
</style>
