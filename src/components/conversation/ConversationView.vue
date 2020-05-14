<template>
  <section class="flex-fill chat-section-content">

      <conversation-header
        :chatViewMode="chatViewMode"
        :conversation="conversation"/>

      <chat-view
        :conversation="conversation"
        v-if="chatViewMode === CHAT_VIEW_MODE.CHAT"/>

      <chat-info
        :conversation="conversation"
        v-if="chatViewMode === CHAT_VIEW_MODE.INFO"/>

      <chat-whisper
        :conversation="conversation"
        v-if="chatViewMode === CHAT_VIEW_MODE.WHISPER"/>

      <chat-add-people
        :conversation="conversation"
        v-if="chatViewMode === CHAT_VIEW_MODE.ADD_PEOPLE"/>

  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { CHAT_VIEW_MODE } from '@/store/chat/types';
import ConversationHeader from '@/components/conversation/ConversationHeader.vue';
import ChatView from '@/components/chat/ChatView.vue';
import ChatInfo from '@/components/chat/ChatInfo.vue';
import ChatWhisper from '@/components/chat/ChatWhisper.vue';
import ChatAddPeople from '@/components/chat/ChatAddPeople.vue';

export default {
  name: 'ConversationView',
  props: ['conversation'],

  data() {
    return {
      CHAT_VIEW_MODE,
    };
  },

  computed: {
    ...mapGetters({
      chatViewMode: 'getMessagesChatViewMode',
    }),
  },

  components: {
    'conversation-header': ConversationHeader,
    'chat-view': ChatView,
    'chat-info': ChatInfo,
    'chat-whisper': ChatWhisper,
    'chat-add-people': ChatAddPeople,
  },
};
</script>

<style lang="scss" scoped>
  .chat-section-content {
    width: 100%;
    margin: 0 auto;
    max-width: 870px;
  }
</style>
