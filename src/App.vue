<template>
  <v-app class="background-styled">

    <v-navigation-drawer
      v-model="drawer"
      :permanent="!isDrawerMini"
      :mini-variant="isDrawerMini"
      app
      color="background"
    >

      <v-app-bar
        elevation="0"
        color="secondary">

          <v-app-bar-nav-icon @click="toggleDrawer" >
            <img
              src="./assets/images/Meddy-App-Logo-2.png"
              class="ign-toolbar-logo"
              alt="Burn Logo"/>
          </v-app-bar-nav-icon>

        <v-toolbar-title>
          <div style="{width: 100px; height: 56px;}">
            <img style="{
              width: 80px;
              height: 45px;
              margin-top: 6px;
            }" src="./assets/images/Meddy-Logo_Text.png" />
          </div>
        </v-toolbar-title>

      </v-app-bar>

      <v-list dense class="mt-2">

        <v-list-item link to="/tasks">
          <v-list-item-action>
            <v-icon>mdi-calendar-check-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tasks</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link to="/conversations">
          <v-list-item-action class="d-flex flex-row align-center">
            <v-badge
              :value="unreadCount"
              color="red"
              overlap
              :content="unreadCount > 99 ? '+99' : unreadCount"
            >
            <v-icon>mdi-message-text-outline</v-icon>
            </v-badge>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-title>Conversations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link to="/media">
          <v-list-item-action>
            <v-icon>mdi-folder-multiple-image</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Media Library</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link to="/settings">
          <v-list-item-action>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      elevation="0"
      color="secondary"
    >
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <logged-user />

    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import LoggedUser from '@/components/user/LoggedUser.vue';

export default Vue.extend({
  name: 'App',

  components: {
    'logged-user': LoggedUser,
  },

  data: () => ({
    drawer: null,
    isDrawerMini: true,
  }),

  computed: {
    ...mapGetters({
      unreadCount: 'getUnreadCount',
    }),

    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },

    title() {
      return this.$route.name;
    },
  },

  created() {
    this.$vuetify.theme.dark = true;
    this.$store.dispatch('onAutoLogin');
  },

  methods: {

    toggleDrawer() {
      this.isDrawerMini = !this.isDrawerMini;
    },
  },

  mounted() {
    console.log(process.env);
  },

});
</script>

<style lang="scss">
@import "assets/styles/styles";
@import './assets/styles/styles.css';

  .background-styled {
    background-color: var(--v-background-base) !important;
  }

</style>
