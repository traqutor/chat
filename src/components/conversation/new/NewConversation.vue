<template>
  <div>
    <new-conversation-header></new-conversation-header>

    <perfect-scrollbar class="content-wrapper">

      <section class="participants-list-section">
        New Conversation
      </section>

    </perfect-scrollbar>

    <new-conversation-footer></new-conversation-footer>
  </div>
</template>

<script>
import NewConversationHeader from '@/components/conversation/new/NewConversationHeader.vue';
import NewConversationFooter from '@/components/conversation/new/NewConversationFooter.vue';

export default {
  name: 'NewConversation',
  components: {
    'new-conversation-header': NewConversationHeader,
    'new-conversation-footer': NewConversationFooter,
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
