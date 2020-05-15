<template>
  <div>
    <new-conversation-header></new-conversation-header>

    <perfect-scrollbar class="content-wrapper">

      <v-subheader>Participants</v-subheader>

      <template v-for="(participant) of selectedParticipants">

        <div
          @click="toggleParticipantSelection(participant)"
          class="row mr-6 pl-2 participant-list-item"
          :key="participant.id">

          <v-icon color="red" class="ma-3">
            mdi-minus-circle-outline
          </v-icon>

          <user-list-item
            :user="participant"
          ></user-list-item>

        </div>

      </template>


    </perfect-scrollbar>

    <new-conversation-footer></new-conversation-footer>
  </div>
</template>

<script>
import NewConversationHeader from '@/components/conversation/new/NewConversationHeader.vue';
import NewConversationFooter from '@/components/conversation/new/NewConversationFooter.vue';
import UserListItem from '@/components/user/UserListItem.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'NewConversation',

  components: {
    'new-conversation-header': NewConversationHeader,
    'new-conversation-footer': NewConversationFooter,
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

<style lang="scss" scoped>
@import 'src/assets/styles/variables';
  .content-wrapper {
    position: relative;
    padding: $ign-padding-normal;
    height: calc(100vh - 234px);
  }

.participants-list-section {
  margin-left: auto;
  margin-right: auto;
  max-width: $ign-readable-width;
}

</style>
