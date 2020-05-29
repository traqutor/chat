<template>
  <div class="chat-sub-header-section">

    <perfect-scrollbar
      id="chat-whisper"
      ref="chatWhisper"
      class="chat-perfect-scrollbar"
    >

        <v-subheader>Whisper to someone</v-subheader>

        <template v-for="(participant) of conversation.conversationParticipantDtos">

          <div
            @click="toggleParticipantSelection(participant)"
            class="row mr-6 pl-2 participant-list-item"
            :key="participant.id">

            <v-icon v-if="getWhisperToParticipants.find(prt => participant.id === prt.id)"
                    color="green" class="ma-3">
              mdi-check-circle-outline
            </v-icon>

            <v-icon v-else class="ma-3">
              mdi-checkbox-blank-circle-outline
            </v-icon>


            <user-list-item :user="participant" />

          </div>

        </template>

    </perfect-scrollbar>

    <section v-if="getWhisperToParticipants.length > 0" class="footer-wrapper mt-2">

      <div
        v-for="sel of getWhisperToParticipants"
        @click="toggleParticipantSelection(sel)"
        class="pa-2 participant-list-item"
        :key="sel.id">
        <v-row>
          <v-icon color="red" class="pr-3">
            mdi-minus-circle-outline
          </v-icon>
          <user-avatar :userId="sel.userId" />
        </v-row>
        <span>{{ sel.userName }}</span>
      </div>

    </section>

    <footer class="footer-wrapper pa-3">
      <v-btn color="blue" @click="onSetWhisperToParticipants">Whisper</v-btn>
    </footer>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';
import UserAvatar from '@/components/user/UserAvatar.vue';

export default {
  name: 'ChatWhisper',

  props: ['conversation'],

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
      selectedParticipants: [],
    };
  },

  components: {
    'user-list-item': UserListItem,
    'user-avatar': UserAvatar,
  },

  computed: {

    ...mapGetters({
      getWhisperToParticipants: 'getWhisperToParticipants',
    }),

  },

  methods: {

    ...mapActions({}),

    ...mapMutations({
      addToWhisperToParticipants: 'addToWhisperToParticipants',
      removeFromWhisperToParticipants: 'removeFromWhisperToParticipants',
    }),

    toggleParticipantSelection(participant) {
      const idx = this.getWhisperToParticipants.findIndex((prt) => prt.id === participant.id);
      console.log('participant', participant);
      console.log('idx', idx);
      if (idx === -1) {
        this.addToWhisperToParticipants(participant);
      } else {
        this.removeFromWhisperToParticipants(idx);
      }
    },

    getParticipant(userId) {
      return this.conversation.conversationParticipantDtos.find((usr) => usr.id === userId);
    },

    onSetWhisperToParticipants() {
      console.log('onSetWhisperToParticipants', this.getWhisperToParticipants);
    },

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

  .participant-list-item {
    cursor: pointer;
  }

</style>

<style scoped>

  .participant-list-item :hover {
    background-color: var(--v-secondary-base);
  }

</style>
