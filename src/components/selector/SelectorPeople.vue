<template>

  <perfect-scrollbar
    id="scroll-on-people"
    v-scroll:#scroll-on-people="onScroll"
    class="selector-list-section pr-3">

    <v-subheader>Active People</v-subheader>

    <template v-for="(participant) of availableParticipants">

       <user-list-item :key="participant.userId" :user="participant" />

    </template>


  </perfect-scrollbar>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';

export default {
  name: 'SelectorPeople',

  components: {
    'user-list-item': UserListItem,
  },

  computed: {
    ...mapGetters({
      availableParticipants: 'getConversationAvailableParticipants',
    }),
  },

  methods: {
    ...mapActions({
    }),

    onScroll() {
      // todo
    },

  },
};
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/variables';

  .selector-list-section{
    position: relative;
    margin-top: 14px;
    height: calc(100vh - #{$ign-header-height} - 94px);
  }

</style>
