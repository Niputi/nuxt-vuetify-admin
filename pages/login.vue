<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4 lg4>
          <v-card class="elevation-1 pa-3">
            <v-card-text>
              <div class="layout column align-center">
                <img
                  src="https://via.placeholder.com/120/000000/FFFFFF/?text=TMP"
                  alt="Vue Material Admin"
                  width="120"
                  height="120"
                />
                <h1 class="flex my-4 primary--text">
                  Material Admin Template
                </h1>
              </div>
              <v-form>
                <v-text-field
                  v-model="model.username"
                  append-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="model.password"
                  append-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn icon>
                <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="red">fa fa-google fa-lg</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn block color="primary" :loading="loading" @click="login"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  layout: "basic",
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
        this.$router.push("/dashboard");
      }, 1000);
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
