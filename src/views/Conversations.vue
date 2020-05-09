<template>
  <div class="content">

      <v-col cols="4">

        <div class="ign-conv-header-wrapper">

          <v-text-field
            solo
            background-color="#3d464f"
            dense
            label="Search"
            append-icon="mdi-magnify"
            v-model="searchText"
            @click:append="search"
          ></v-text-field>

        </div>

        <v-container
          id="scroll-target"
          class="conversation-list overflow-y-auto"
        >
          <div v-scroll:#scroll-target="onScroll">

            <template v-for="conversation of conversations.pagedResults">

              <conversation-list-item
                :key="conversation.id"
                :conversation="conversation"
                :class="(selectedConversation
            && conversation.conversationId === selectedConversation.conversationId)
            ? 'active'
            : ''"
                @click.native="setActiveConversation(conversation)"
              >

                <conversation-item-status slot="status" :conversation="conversation"/>

                <conversation-item-details slot="details" :conversation="conversation"/>

              </conversation-list-item>
            </template>

          </div>
        </v-container>


      </v-col>

      <v-col cols="8" v-if="selectedConversation.conversationId !== ''">

        <div class="ign-conv-header-wrapper">
          <conversation-list-item
            :conversation="selectedConversation" />
        </div>

        <chat-view />

        <chat-footer />

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

export default {
  name: 'Conversations',

  data() {
    return {
      searchText: '',
      tmpScrollTop: 0,
    };
  },
  components: {
    'conversation-list-item': ConversationListItem,
    'conversation-item-status': ConversationItemStatus,
    'conversation-item-details': ConversationItemDetails,
    'chat-view': ChatView,
    'chat-footer': ChatFooter,
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

    search(event) {
      console.log('Search', this.searchText);
    },

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
    margin-top: 14px;
    height: calc(100vh - 82px - 94px);
  }

</style>
