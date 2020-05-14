<template>
  <div class="chat-sub-header-section">

    <perfect-scrollbar
      id="chat-whisper"
      v-scroll:#chat-whisper="onScroll"
      ref="chatWhisper"
      class="chat-perfect-scrollbar"
    >

        <v-subheader>Whisper to someone</v-subheader>

        <template v-for="(participant) of conversation.conversationParticipantDtos">

          <div
            @click="toggleParticipantSelection(participant)"
            class="row mr-6 pl-2 participant-list-item"
            :key="participant.id">

            <v-icon v-if="selectedParticipants.find(prt => participant.id === prt.id)"
                    color="green" class="mr-3">
              mdi-check-circle-outline
            </v-icon>

            <v-icon v-else class="mr-3">
              mdi-checkbox-blank-circle-outline
            </v-icon>


            <userListItem
              :user="participant"
            ></userListItem>

          </div>

        </template>

    </perfect-scrollbar>

    <section v-if="selectedParticipants.length > 0" class="footer-wrapper mt-2">

      <div
        v-for="sel of selectedParticipants"
        @click="toggleParticipantSelection(sel)"
        class="pa-2 participant-list-item"
        :key="sel.id">
        <v-row>
          <v-icon color="red" class="pr-3">
            mdi-minus-circle-outline
          </v-icon>
          <div class="ign-avatar">
            <img src="../../assets/images/avatar-3.jpg">
          </div>
        </v-row>
        <span>{{ sel.userName }}</span>
      </div>

    </section>

    <footer class="footer-wrapper pa-3">
      <v-btn color="blue">Whisper</v-btn>
    </footer>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';

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
    userListItem: UserListItem,
  },

  computed: {

    ...mapGetters({}),

  },

  methods: {

    ...mapActions({}),

    toggleParticipantSelection(participant) {
      const idx = this.selectedParticipants.findIndex((prt) => prt.id === participant.id);
      if (idx !== -1) {
        this.selectedParticipants.splice(idx, 1);
      } else {
        this.selectedParticipants.push(participant);
      }
    },

    getParticipant(userId) {
      return this.conversation.conversationParticipantDtos.find((usr) => usr.id === userId);
    },

    onScroll() {
      const container = this.$refs.chatWhisper.$el;
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

  .chat-chat-perfect-scrollbar {
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

  .participant-list-item:hover {
    background-color: $ign-secondary-dark;
  }

</style>
