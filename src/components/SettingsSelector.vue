<template>
  <v-container>

    <v-row class="text-center">

      <v-col cols="12">
        <v-img
          :src="require('../assets/images/burn.svg')"
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


    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SettingsSelector',

  data: () => ({
  }),
});
</script>
