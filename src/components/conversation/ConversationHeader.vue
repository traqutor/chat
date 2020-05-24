<template>
  <div class="ign-header-wrapper">
    <conversation-list-item
      :conversation="conversation" :show-details="false" />

    <div class="ign-secondary-wrapper" v-if="chatViewMode === CHAT_VIEW_MODE.CHAT">

      <div
        v-for="part of conversation.conversationParticipantDtos.slice(0, 4)"
        :key="part.userId"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <div class="small-avatar" v-on="on">
              <user-avatar :user-id="part.userId" />
            </div>
          </template>
          <span>{{ part.userName }}</span>
        </v-tooltip>
      </div>

      <div v-if="conversation.conversationParticipantDtos.length > 4"
           @click="setChatViewMode(CHAT_VIEW_MODE.INFO)"
           class="participant-badge">
        +{{conversation.conversationParticipantDtos.length - 4}}
      </div>


      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.ADD_PEOPLE)"
                 class="ml-3"
                 icon
                 v-on="on">
            <v-icon small>mdi-account-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>Add people</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.WHISPER)" icon v-on="on">
            <v-icon small>mdi-access-point</v-icon>
          </v-btn>
        </template>
        <span>Whisper to someone</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn @click="setChatViewMode(CHAT_VIEW_MODE.INFO)" icon v-on="on">
            <v-icon small>mdi-alert-circle-outline</v-icon>
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
import UserAvatar from '@/components/user/UserAvatar.vue';
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
    'user-avatar': UserAvatar,
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
    max-width: $ign-readable-width;
  }

  .ign-secondary-wrapper {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .small-avatar {
    height: 24px;
    width: 24px;
    background: #5699cd;
    color: #fff;
    box-shadow: rgb(24, 34, 45) 0 0 0 2.88px;
    z-index: 2;
    transition: all .3s ease;
    border-radius: 50%;
    cursor: pointer;
    .ign-avatar {
      height: 24px !important;
      width: 24px !important;
    }
  }

  .participant-badge {
    text-align:center;
    line-height:28px;
    width:28px;
    height:28px;
    font-size: 12px;
    background-color: $ign-primary;
    border-radius: 50%;
    color: $ign-white;
    box-shadow: rgb(24, 34, 45) 0 0 0 2.88px;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    z-index: 2;
    cursor: pointer;
  }

</style>
