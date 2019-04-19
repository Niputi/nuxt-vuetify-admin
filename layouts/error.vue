<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <div class="text-md-center">
        <h1 class>{{ error.statusCode }}</h1>
        <h2 class>{{ error.message }}</h2>
        <div>
          <v-btn color="primary" to="/">Homepage</v-btn>
        </div>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: Object
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 15px;
  font-size: 5em;
}
.info {
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button {
  margin-top: 50px;
}
h1 {
  font-size: 150px;
  line-height: 150px;
  font-weight: 700;
  color: #252932;
  text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px,
    rgba(61, 61, 61, 0.3) 3px 3px;
}
</style>
