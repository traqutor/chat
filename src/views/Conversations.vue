<template>
  <div class="content">

    <v-col cols="4">

    <div class="selector-wrapper pr-3">

      <selector-header :menu-items="menuItems" @set-active="setActive" />

      <selector-tabs
        :menu-items="menuItems"
        v-show="viewMode === VIEW_MODE.CHAT
        && chatViewMode !== CHAT_VIEW_MODE.ADD_PEOPLE">
      </selector-tabs>

      <selector-participants v-show="viewMode === VIEW_MODE.NEW ||
      chatViewMode === CHAT_VIEW_MODE.ADD_PEOPLE">
      </selector-participants>

    </div>

    </v-col>

    <v-col cols="8" v-if="selectedConversation.conversationId !== '' || viewMode === VIEW_MODE.NEW">

      <conversation-view
        v-show="viewMode === VIEW_MODE.CHAT"
        :conversation="selectedConversation" />

      <conversation-new v-show="viewMode === VIEW_MODE.NEW"/>

    </v-col>

    <v-col v-else cols="8">
      <conversation-hello />
    </v-col>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ConversationView from '@/components/conversation/ConversationView.vue';
import NewConversation from '@/components/conversation/new/NewConversation.vue';
import SelectorHeader from '@/components/selector/SelectorHeader.vue';
import SelectorTabs from '@/components/selector/SelectorTabs.vue';
import SelectorParticipants from '@/components/selector/SelectorParticipants.vue';
import Hello from '@/components/Hello.vue';
import { VIEW_MODE } from '@/store/conv/types';
import { CHAT_VIEW_MODE } from '@/store/chat/types';

export default {
  name: 'Conversations',

  data() {
    return {
      VIEW_MODE,
      CHAT_VIEW_MODE,
      menuItems: [
        { name: 'Conversations', isActive: true },
        { name: 'People', isActive: false },
        { name: 'Groups', isActive: false },
      ],
    };
  },

  components: {
    'selector-header': SelectorHeader,
    'selector-tabs': SelectorTabs,
    'selector-participants': SelectorParticipants,
    'conversation-view': ConversationView,
    'conversation-new': NewConversation,
    'conversation-hello': Hello,
  },

  computed: {
    ...mapGetters({
      viewMode: 'getConversationViewMode',
      chatViewMode: 'getMessagesChatViewMode',
      selectedConversation: 'getSelectedConversation',
    }),
  },

  methods: {

    setActive(index) {
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

  .selector-wrapper {
    border-right: 1px solid $ign-secondary;
  }

</style>
