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
            @click:append="search"
          ></v-text-field>

        </div>

          <template v-for="conversation of conversations">

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

      </v-col>

      <v-col cols="8" v-if="selectedConversation.conversationId !== ''">

        <div class="ign-conv-header-wrapper">
          <conversation-list-item
            :conversation="selectedConversation" />
        </div>

        <chat-view />

        <chat-footer :conversation="selectedConversation" />

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

  components: {
    'conversation-list-item': ConversationListItem,
    'conversation-item-status': ConversationItemStatus,
    'conversation-item-details': ConversationItemDetails,
    'chat-view': ChatView,
    'chat-footer': ChatFooter,
  },

  computed: {
    ...mapGetters({
      conversations: 'getAllConversations',
      selectedConversation: 'getSelectedConversation',
    }),
  },

  methods: {
    ...mapActions({
      setActiveConversation: 'setSelectedConversationAction',
    }),
    search() {
      console.log('Search');
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
</style>
