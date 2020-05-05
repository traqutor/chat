<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="isDrawerOpen"
      app
      clipped
      :class="`ign-drawer-background-${theme}`"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-message-text-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Conversations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      elevation="0"
      :class="`ign-toolbar-background-${theme}`"
    >
      <v-app-bar-nav-icon @click="toggleDrawer" >
        <img
          src="./assets/images/burn.svg"
          class="ign-toolbar-logo"
          alt="Burn Logo"/>
      </v-app-bar-nav-icon>
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-switch
              v-model="$vuetify.theme.dark"
              primary
              label="Dark"
            />
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light';
    },
    title() {
      return this.$route.name;
    },
  },

  data: () => ({
    drawer: null,
    isDrawerOpen: false,
  }),

  created() {
    this.$vuetify.theme.dark = true;
  },

  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
});
</script>

<style lang="scss">
@import "assets/styles/styles";
</style>
