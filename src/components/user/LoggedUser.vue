<template>

  <user-item v-if="loggedUser.userId !== ''" :user="loggedUser">

    <v-menu bottom left>

      <template v-slot:activator="{ on }">
        <v-btn
          dark
          icon
          v-on="on"
        >
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title>Account details</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item @click="onLogOut">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-switch
            v-model="$vuetify.theme.dark"
            primary
            label="Dark"
          />
        </v-list-item>

      </v-list>
    </v-menu>
  </user-item>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserListItem from './UserListItem.vue';

export default {
  name: 'LoggedUser',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser',
    }),
  },
  methods: {
    ...mapActions({
      logout: 'logout',
    }),
    onLogOut() {
      this.logout();
      this.$router.push('/login');
    },
  },
  components: {
    'user-item': UserListItem,
  },
};
</script>


<style lang="scss" scoped>
@import "src/assets/styles/variables";

  .ign-active-green {
    color: $ign-teal !important;
  }

</style>
