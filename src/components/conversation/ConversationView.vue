<template>
  <div>

    <conversation-header :conversation="conversation"/>

    <chat-view/>
    <chat-footer/>

  </div>
</template>

<script>
import ConversationHeader from '@/components/conversation/ConversationHeader.vue';
import ChatView from '@/components/chat/ChatView.vue';
import ChatFooter from '@/components/chat/ChatFooter.vue';

export default {
  name: 'ConversationView',
  props: ['conversation'],
  components: {
    'conversation-header': ConversationHeader,
    'chat-view': ChatView,
    'chat-footer': ChatFooter,
  },
};
</script>

<style lang="scss" scoped>

</style>
