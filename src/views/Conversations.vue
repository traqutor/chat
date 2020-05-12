<template>
  <div class="content">

      <v-col cols="4">

        <selector-header />
        {{viewMode}}
        <v-container>

          <perfect-scrollbar
            id="scroll-target"
            v-scroll:#scroll-target="onScroll"
            class="conversation-list pr-3">

            <template v-for="conversation of conversations.pagedResults">

              <conversation-list-item
                :key="conversation.id"
                :conversation="conversation"
                :class="(selectedConversation
            && conversation.conversationId === selectedConversation.conversationId)
            ? 'ign-active'
            : ''"
                @click.native="setActiveConversation(conversation)"
              >

                <conversation-item-status slot="status" :conversation="conversation"/>

                <conversation-item-details slot="details" :conversation="conversation"/>

              </conversation-list-item>
            </template>

          </perfect-scrollbar>
        </v-container>


      </v-col>

      <v-col cols="8" v-if="selectedConversation.conversationId !== ''">

        <conversation-header :conversation="selectedConversation" />

        <div v-if="viewMode === VIEW_MODE.CHAT">
          <chat-view />
          <chat-footer />
        </div>


      </v-col>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ConversationListItem from '@/components/conversation/ConversationListItem.vue';
import ConversationItemStatus from '@/components/conversation/ConversationItemStatus.vue';
import ConversationItemDetails from '@/components/conversation/ConversationItemDetails.vue';
import ChatView from '@/components/chat/ChatView.vue';
import ChatFooter from '@/components/chat/ChatFooter.vue';
import SelectorHeader from '@/components/selector/SelectorHeader.vue';
import ConversationHeader from '@/components/conversation/ConversationHeader.vue';
import { VIEW_MODE } from '@/store/conv/types';

export default {
  name: 'Conversations',

  data() {
    return {
      VIEW_MODE,
      searchText: '',
      tmpScrollTop: 0,
    };
  },
  components: {
    'selector-header': SelectorHeader,
    'conversation-header': ConversationHeader,
    'conversation-list-item': ConversationListItem,
    'conversation-item-status': ConversationItemStatus,
    'conversation-item-details': ConversationItemDetails,
    'chat-view': ChatView,
    'chat-footer': ChatFooter,
  },

  computed: {
    ...mapGetters({
      isLoading: 'getIsLoadingConversation',
      viewMode: 'getConversationViewMode',
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

  .content {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
  }

  .conversation-list{
    position: relative;
    margin-top: 14px;
    height: calc(100vh - 82px - 94px);
  }

  /*.conversation-list:hover{*/
  /*  overflow-y: auto;*/
  /*}*/

</style>
