<template>
  <v-container>

    <v-row class="text-center">

      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />

        <div class="text-center">
          <div class="my-2">
            <v-btn x-small color="secondary" dark>Extra small Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn small color="primary" dark>Small Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="warning" dark>Normal Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn color="error" dark large>Large Button</v-btn>
          </div>
          <div class="my-2">
            <v-btn x-large color="success" dark>Extra large Button</v-btn>
          </div>

          <v-switch
            v-model="$vuetify.theme.dark"
            primary
            label="Dark"
          />

        </div>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">

        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">

        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>


      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
  }),
});
</script>
