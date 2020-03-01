<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <v-layout align-center justify-center column fill-height>
        <img
          src="https://via.placeholder.com/120/000000/FFFFFF/?text=TMP"
          alt="Vue Material Admin"
          width="120"
          height="120"
        />
        <h1 class="my-4 primary--text display-1">Material Admin Template</h1>
      </v-layout>
      <v-form>
        <v-text-field
          v-model="model.username"
          append-icon="mdi-account"
          name="login"
          label="Login"
          type="text"
        ></v-text-field>
        <v-text-field
          id="password"
          v-model="model.password"
          append-icon="mdi-lock"
          name="password"
          label="Password"
          type="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn icon>
        <v-icon color="blue">mdi-facebook large</v-icon>
      </v-btn>
      <v-btn icon> <v-icon color="red">mdi-instagram large</v-icon> </v-btn>
      <v-btn icon>
        <v-icon color="light-blue">mdi-twitter large</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn color="primary" :loading="loading" @click="login">
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  layout: "Auth",
  data: () => ({
    loading: false,
    model: {
      username: "admin@isockde.com",
      password: "password"
    }
  }),

  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    }
  }
};
</script>
