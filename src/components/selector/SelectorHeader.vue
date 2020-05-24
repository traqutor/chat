<template>
  <header class="wrapper">
    <hgroup class="actions-wrapper">
      <v-text-field
        solo
        dense
        label="Search"
        background-color="secondary"
        append-icon="mdi-magnify"
        v-model="searchText"
        @click:append="search"
        hide-details
      ></v-text-field>

      <v-btn @click="toggleConversationMode" small color="blue" class="ml-3" fab>
        <v-icon
          v-if="viewMode === VIEW_MODE.CHAT
          && chatViewMode !== CHAT_VIEW_MODE.ADD_PEOPLE">mdi-plus</v-icon>
        <v-icon v-else>mdi-account-multiple-check-outline</v-icon>
      </v-btn>
    </hgroup>

    <hgroup v-if="viewMode=== VIEW_MODE.CHAT
          && chatViewMode !== CHAT_VIEW_MODE.ADD_PEOPLE"
            class="buttons-wrapper">
      <div
        v-for="(item, idx) of menuItems"
        @click="setActive(idx)"
        :key="idx"
        class="button-underline caption" :class="item.isActive ? 'active-button' : ''">
        {{item.name}}
        <span v-if="idx===0 && unreadCount > 0" class="ml-1 mr-5">
          <v-badge
            :value="unreadCount"
            color="blue"
            :content="unreadCount"></v-badge>
          </span>
      </div>
    </hgroup>

    <hgroup v-else class="buttons-wrapper">
      <div
        class="button-underline" >
        Select participants
      </div>
    </hgroup>

  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VIEW_MODE } from '@/store/conv/types';
import { CHAT_VIEW_MODE } from '@/store/chat/types';

export default {
  name: 'SelectorHeader',

  props: ['menuItems'],

  data() {
    return {
      searchText: '',
      VIEW_MODE,
      CHAT_VIEW_MODE,
    };
  },

  computed: {
    ...mapGetters({
      viewMode: 'getConversationViewMode',
      chatViewMode: 'getMessagesChatViewMode',
      unreadCount: 'getUnreadCount',
    }),
  },

  methods: {
    ...mapActions({
      setConversationMode: 'setConversationMode',
    }),

    search() {
      console.log('Search', this.searchText);
    },

    toggleConversationMode() {
      const mode = this.viewMode === VIEW_MODE.CHAT
        ? VIEW_MODE.NEW : VIEW_MODE.CHAT;
      this.setConversationMode(mode);
    },

    setActive(index) {
      this.$emit('set-active', index);
    },
  },

};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .wrapper {
    flex: 1;
    height: $ign-header-height;
    border-bottom: 1px solid $ign-secondary;
    display: flex;
    flex-direction: column;
  }

  .actions-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .buttons-wrapper {
    margin-top: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .button-underline {
    cursor: pointer;
    padding: 4px 16px;
  }

  .button-underline:hover {
    color: white;
  }

  .active-button {
    border-bottom: 3px solid $ign-primary;
  }

</style>
