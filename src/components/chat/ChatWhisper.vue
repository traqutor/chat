<template>
  <div class="chat-sub-header-section">

    <perfect-scrollbar
      id="chat-whisper"
      ref="chatWhisper"
      class="chat-perfect-scrollbar"
    >

        <v-subheader>Whisper to someone
          <span class="spacer"></span>

          <v-text-field
            solo
            dense
            label="Search"
            background-color="secondary"
            append-icon="mdi-magnify"
            v-model="searchText"
            @click:append="onParticipantSearch"
            hide-details
          ></v-text-field>

        </v-subheader>

        <template v-for="(participant) of filterItems()" >

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
import { CHAT_VIEW_MODE } from '@/store/chat/types';

export default {
  name: 'ChatWhisper',

  props: ['conversation'],

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
      selectedParticipants: [],
      searchText: '',
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

    ...mapActions({
      setChatViewMode: 'setMessagesChatViewMode',
    }),

    ...mapMutations({
      addToWhisperToParticipants: 'addToWhisperToParticipants',
      removeFromWhisperToParticipants: 'removeFromWhisperToParticipants',
    }),

    filterItems() {
      return this.conversation.conversationParticipantDtos.filter((preset) => {
        const regex = new RegExp(`(${this.searchText})`, 'i');
        return preset.userName && preset.userName.match(regex);
      });
    },

    onParticipantSearch() {
      console.log('onParticipantSearch', this.searchText);
    },

    toggleParticipantSelection(participant) {
      const idx = this.getWhisperToParticipants.findIndex((prt) => prt.id === participant.id);
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
      this.setChatViewMode(CHAT_VIEW_MODE.CHAT);
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
