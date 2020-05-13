<template>
  <div>

    <conversation-header :conversation="conversation"/>

    <chat-view/>

  </div>
</template>

<script>
import ConversationHeader from '@/components/conversation/ConversationHeader.vue';
import ChatView from '@/components/chat/ChatView.vue';

export default {
  name: 'ConversationView',
  props: ['conversation'],
  components: {
    'conversation-header': ConversationHeader,
    'chat-view': ChatView,
  },
};
</script>

<style lang="scss" scoped>

</style>
