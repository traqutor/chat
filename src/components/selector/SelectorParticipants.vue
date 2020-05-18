<template>

  <perfect-scrollbar
    id="scroll-on-participants"
    v-scroll:#scroll-on-participants="onScroll"
    class="selector-list-section pr-3">

    <v-subheader>List of available participants</v-subheader>

    <template v-for="(participant) of availableParticipants">

      <div
        @click="toggleParticipantSelection(participant)"
        class="row mr-6 pl-2 participant-list-item"
        :key="participant.id">

        <v-icon v-if="selectedParticipants.find(prt => participant.id === prt.id)"
                color="green" class="ma-3">
          mdi-check-circle-outline
        </v-icon>

        <v-icon v-else class="ma-3">
          mdi-checkbox-blank-circle-outline
        </v-icon>

        <userListItem :user="participant" />

      </div>

    </template>


  </perfect-scrollbar>

</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';

export default {
  name: 'SelectorParticipants',

  components: {
    userListItem: UserListItem,
  },

  computed: {
    ...mapGetters({
      availableParticipants: 'getConversationAvailableParticipants',
      selectedParticipants: 'getConversationSelectedParticipants',
    }),
  },

  methods: {
    ...mapMutations({
      toggleParticipantSelection: 'toggleParticipantSelection',
    }),

    onScroll(e) {
      if (this.tmpScrollTop < e.target.scrollTop
          && e.target.scrollTop > e.target.scrollHeight / 2) {
        this.tmpScrollTop = e.target.scrollTop;
        if (!this.isLoading
            && this.conversations.pageCount > this.conversations.currentPage) {
          const page = this.conversations.currentPage + 1;
          this.loadMoreConversations(page);
        }
      }
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
