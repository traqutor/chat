<template>
  <div class="chat-sub-header-section">

  <perfect-scrollbar class="chat-perfect-scrollbar">

    <v-subheader>Add Participants</v-subheader>

    <template v-for="(participant) of selectedParticipants">

      <div
        @click="toggleParticipantSelection(participant)"
        class="row mr-6 pl-2 participant-list-item"
        :key="participant.id">

        <v-icon color="red" class="ma-3">
          mdi-minus-circle-outline
        </v-icon>

        <user-list-item :user="participant" />

      </div>

    </template>


  </perfect-scrollbar>

    <footer class="footer-wrapper">
      <v-btn color="blue">
        Add to Conversation
      </v-btn>
    </footer>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';

export default {
  name: 'ChatAddPeople',

  props: ['conversation'],

  components: {
    'user-list-item': UserListItem,
  },

  computed: {
    ...mapGetters({
      selectedParticipants: 'getConversationSelectedParticipants',
    }),
  },

  methods: {
    ...mapMutations({
      toggleParticipantSelection: 'toggleParticipantSelection',
    }),

  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .chat-sub-header-section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 170px);
    max-height: calc(100vh - 170px);
  }

  .chat-perfect-scrollbar {
    flex: auto;
    position: relative;
    padding: $ign-padding-normal;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
  }


</style>
