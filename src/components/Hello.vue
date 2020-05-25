<template>
  <v-container>

    <v-row class="text-center">

      <v-col cols="12">
        <v-img
          :src="require('../assets/images/image_logo_name.png')"
          contain
          height="200"
        />

        <div class="text-center ma-3">

          <div class="my-2 display-1 font-weight-light">
            Hello, {{ loggedUser.userName }}
          </div>
          <div class="my-3">
            <v-btn
              @click="startNewConversationMode"
              color="blue">Start new conversation</v-btn>
          </div>

        </div>
      </v-col>


    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { VIEW_MODE } from '@/store/conv/types';

export default Vue.extend({
  name: 'Hello',

  data() {
    return {
      VIEW_MODE,
    };
  },

  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser',
    }),
  },

  methods: {
    ...mapActions({
      setConversationMode: 'setConversationMode',
    }),

    startNewConversationMode() {
      this.setConversationMode(VIEW_MODE.NEW);
    },

  },

});
</script>
