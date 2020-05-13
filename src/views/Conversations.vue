<template>
  <div class="content">

      <v-col cols="4">

      <div class="selector-wrapper pr-3">

        <selector-header :view-mode="viewMode" :menu-items="menuItems" @set-active="setActive" />

        <div>
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
        </div>

      </div>

      </v-col>

      <v-col cols="8" v-if="selectedConversation.conversationId !== ''">

        <conversation-view
          v-show="viewMode === VIEW_MODE.CHAT"
          :conversation="selectedConversation" />

        <conversation-new v-show="viewMode === VIEW_MODE.NEW"/>

      </v-col>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ConversationView from '@/components/conversation/ConversationView.vue';
import ConversationListItem from '@/components/conversation/ConversationListItem.vue';
import ConversationItemStatus from '@/components/conversation/ConversationItemStatus.vue';
import ConversationItemDetails from '@/components/conversation/ConversationItemDetails.vue';
import NewConversation from '@/components/conversation/new/NewConversation.vue';
import SelectorHeader from '@/components/selector/SelectorHeader.vue';
import { VIEW_MODE } from '@/store/conv/types';

export default {
  name: 'Conversations',

  data() {
    return {
      VIEW_MODE,
      searchText: '',
      tmpScrollTop: 0,
      menuItems: [
        { name: 'Conversations', isActive: true },
        { name: 'People', isActive: false },
        { name: 'Groups', isActive: false },
      ],
    };
  },

  components: {
    'selector-header': SelectorHeader,
    'conversation-view': ConversationView,
    'conversation-new': NewConversation,
    'conversation-list-item': ConversationListItem,
    'conversation-item-status': ConversationItemStatus,
    'conversation-item-details': ConversationItemDetails,
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

    setActive(index) {
      console.log('index', index);
      // eslint-disable-next-line array-callback-return
      this.menuItems.map((item, i) => {
        if (i === index) {
          // eslint-disable-next-line no-param-reassign
          item.isActive = true;
        } else {
          // eslint-disable-next-line no-param-reassign
          item.isActive = false;
        }
      });
      console.log('this.menuItems', this.menuItems);
    },

  },
};
</script>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

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

  .selector-wrapper {
    border-right: 1px solid $ign-secondary;
  }

  /*.conversation-list:hover{*/
  /*  overflow-y: auto;*/
  /*}*/

</style>
