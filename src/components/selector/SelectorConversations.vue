<template>

  <perfect-scrollbar
    id="scroll-on-conversations"
    v-scroll:#scroll-on-conversations="onScroll"
    class="selector-list-section pr-3">

    <template v-for="conversation of conversations.pagedResults">

      <conversation-list-item
        :key="conversation.id"
        :conversation="conversation"
        :show-details="true"
        :class="(selectedConversation
            && conversation.conversationId === selectedConversation.conversationId)
            ? 'ign-active'
            : ''"
        @click.native="setActiveConversation(conversation)"
      >

      </conversation-list-item>
    </template>

  </perfect-scrollbar>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ConversationListItem from '../conversation/ConversationListItem.vue';

export default {
  name: 'SelectorConversations',

  data() {
    return {
      tmpScrollTop: 0,
    };
  },

  components: {
    'conversation-list-item': ConversationListItem,
  },

  computed: {
    ...mapGetters({
      isLoading: 'getIsLoadingConversation',
      conversations: 'getConversations',
      selectedConversation: 'getSelectedConversation',
    }),
  },

  methods: {
    ...mapActions({
      setActiveConversation: 'setSelectedConversationAction',
      loadMoreConversations: 'fetchConversations',
    }),

    onScroll(e) {
      if (this.tmpScrollTop < e.target.scrollTop
        && e.target.scrollTop > e.target.scrollHeight / 2) {
        this.tmpScrollTop = e.target.scrollTop;
        if (!this.isLoading
          && this.conversations.pageCount > this.conversations.currentPage) {
          const page = this.conversations.currentPage + 1;
          this.loadMoreConversations(page);
        }
      }
    },

  },
};
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/variables';

  .selector-list-section{
    position: relative;
    margin-top: 14px;
    height: calc(100vh - #{$ign-header-height} - 94px);
  }

</style>
