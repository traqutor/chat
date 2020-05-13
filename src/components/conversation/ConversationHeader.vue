<template>
  <div class="ign-header-wrapper">
    <conversation-list-item
      :conversation="conversation" />

    <div class="ign-secondary-wrapper" v-if="chatViewMode === CHAT_VIEW_MODE.CHAT">

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.ADD_PEOPLE)" icon v-on="on">
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>Add people</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.WHISPER)" icon v-on="on">
            <v-icon>mdi-access-point</v-icon>
          </v-btn>
        </template>
        <span>Whisper to someone</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.INFO)" icon v-on="on">
            <v-icon>mdi-alert-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>Conversation info</span>
      </v-tooltip>

    </div>

    <div class="ign-secondary-wrapper" v-else>
      <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.CHAT)">
        <v-icon>mdi-chevron-left</v-icon>
        Back
      </v-btn>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { CHAT_VIEW_MODE } from '@/store/chat/types';
import ConversationListItem from './ConversationListItem.vue';

export default {
  name: 'ConversationHeader',

  props: ['conversation', 'chatViewMode'],

  data() {
    return {
      CHAT_VIEW_MODE,
    };
  },

  components: {
    'conversation-list-item': ConversationListItem,
  },

  methods: {
    ...mapActions({
      setChatViewMode: 'setMessagesChatViewMode',
    }),
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .ign-header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: $ign-header-height;
    border-bottom: 1px solid $ign-secondary;
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

  .ign-secondary-wrapper {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

</style>
