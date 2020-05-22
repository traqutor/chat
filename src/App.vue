<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">

    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="true"
      permanent
      app
      :class="`ign-drawer-background-${theme}`"
    >

      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="./assets/images/burn.svg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title class="title">IGNITE</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-page-layout-sidebar-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list dense class="mt-2">

        <v-list-item link to="/conversations">
          <v-list-item-action class="d-flex flex-row align-center">
            <v-badge
              :value="unreadCount"
              color="red"
              overlap
              left
              :content="unreadCount > 99 ? '+99' : unreadCount "
            >
            <v-icon>mdi-message-text-outline</v-icon>
            </v-badge>
          </v-list-item-action>
          <v-list-item-content>
              <v-list-item-title>Conversations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/tasks">
          <v-list-item-action>
            <v-icon>mdi-calendar-check-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Tasks</v-list-item-title>
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

  data: () => ({
    drawer: null,
    isDrawerOpen: true,
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
