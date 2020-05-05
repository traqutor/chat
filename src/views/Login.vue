<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">

        <div>Login</div>

        <v-text-field
          v-model="userName"
          label="Login"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
        ></v-text-field>

        <v-btn small @click="onLogin">Login</v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  name: 'Login',

  data() {
    return {
      userName: '',
      password: '',
    };
  },

  methods: {
    onLogin() {
      this.$store.dispatch('auth/login', { userName: this.userName, password: this.password });
    },
  },
};

</script>
