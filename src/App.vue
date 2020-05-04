<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="isDrawerOpen"
      app
      clipped
      :class="`ign-background-${theme}`"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-chat</v-icon>
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
    >
      <v-app-bar-nav-icon @click="toggleDrawer" />
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer />

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
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
      <v-btn small color="primary">
        <font-awesome-icon icon="comment" />Small Button</v-btn>
      <v-btn color="warning">
        <font-awesome-icon icon="user-secret" />Normal Button</v-btn>
      <v-btn color="error" large>
        <font-awesome-icon icon="user-secret" />Large Button</v-btn>
      <v-btn x-large color="success" >
        <font-awesome-icon icon="user-secret" />Extra large Button</v-btn>
      <v-btn x-small color="secondary" >
        <font-awesome-icon icon="user-secret" />
      </v-btn>
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
