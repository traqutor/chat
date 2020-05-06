<template>
  <div class="content">

      <v-col cols="4">
          <v-text-field
            solo-inverted
            dense
            label="Search"
            append-icon="mdi-magnify"
            @click:append="search"
          ></v-text-field>

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

      <v-col cols="8">


      </v-col>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ConversationListItem from '@/components/conversation/ConversationListItem.vue';
import ConversationItemStatus from '@/components/conversation/ConversationItemStatus.vue';
import ConversationItemDetails from '@/components/conversation/ConversationItemDetails.vue';

export default {
  name: 'Conversations',

  components: {
    'conversation-list-item': ConversationListItem,
    'conversation-item-status': ConversationItemStatus,
    'conversation-item-details': ConversationItemDetails,
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
