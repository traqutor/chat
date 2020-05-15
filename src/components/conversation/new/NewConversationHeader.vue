<template>
  <div class="ign-header-wrapper">

    <v-btn fab color="blue">
      <v-icon>mdi-forum</v-icon>
    </v-btn>

    <div class="ign-text-field big-fonts-size">
      <input
        type="text"
        id="text"
        v-model="text"
        @change="setNewConversationTopic(text)"
        placeholder="Enter a topic">
    </div>

    <v-btn @click="cancelConversation" class="mr-3">
      Cancel
    </v-btn>
  </div>
</template>

<script>

import { mapActions, mapMutations, mapGetters } from 'vuex';
import { VIEW_MODE } from '@/store/conv/types';

export default {
  name: 'NewConversationHeader',

  data() {
    return {
      text: '',
    };
  },

  computed: {
    ...mapGetters({
      newConversation: 'getNewConversation',
    }),
  },

  methods: {
    ...mapActions({
      setConversationMode: 'setConversationMode',
    }),

    ...mapMutations({
      setNewConversationTopic: 'setNewConversationTopic',
    }),

    cancelConversation() {
      const mode = this.viewMode === VIEW_MODE.CHAT
        ? VIEW_MODE.NEW : VIEW_MODE.CHAT;
      this.setConversationMode(mode);
    },

  },

};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .ign-header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: $ign-header-height;
    border-bottom: 1px solid $ign-secondary;
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

  .ign-text-field {
    flex: 1;

    input[type=text] {
      width: 100%;
      color: $ign-white;
      padding: 0px $ign-padding-normal;
      font-size: 20px;
      font-family: inherit;
      margin: 8px 0;
      display: inline-block;
      border-radius: 4px;
      box-sizing: border-box;
      background-color: transparent;
      border: none transparent;
      outline: none;
      box-shadow: none;
    }

    input:focus {
      outline: none !important;
    }

  }
</style>
