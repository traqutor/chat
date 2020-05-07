<template>
  <v-container>
    <v-row class="text-center" justify="center">
      <v-col cols="4">
        <v-form @submit.prevent="onLogin" id="check-login-form">
        <div>Login</div>

        <v-text-field
          v-model="userName"
          label="Login"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
        ></v-text-field>

          <v-btn type="submit" color="success" form="check-login-form">Login</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

export default {
  name: 'Login',

  computed: {
    ...mapGetters({
      authData: 'authData',
    }),
    checkIfTokenIsOk() {
      console.log('this.authData', this.authData?.accessToken);
      return this.authData?.accessToken;
    },
  },
  watch: {
    checkIfTokenIsOk(token) {
      if (token.length > 0) {
        router.push('/conversations');
      }
    },
  },

  data() {
    return {
      userName: '',
      password: '',
    };
  },

  methods: {
    onLogin() {
      this.$store
        .dispatch('login', {
          userName: this.userName,
          password: this.password,
        });
    },
  },
};

</script>
