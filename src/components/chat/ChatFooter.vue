<template>

  <v-row class="wrapper">

    <v-textarea
      v-model="text"
      solo
      background-color="#3d464f"
      rows="1"
      name="text"
      label="Type a message..."
      @keydown.enter.prevent="onNewPost"
      prepend-inner-icon="mdi-dots-vertical"
      @click:prepend-inner="onPrependMenuOpen"
      height="56px"
    ></v-textarea>

    <v-btn
      :disabled="!text"
      @click="onNewPost"
      class="ma-2"
      fab
      small
      color="blue">
      <v-icon dark>mdi-send</v-icon>
    </v-btn>


  </v-row>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { emptyMessage } from '@/store/chat/types';

export default {
  name: 'ChatFooter',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser',
      conversation: 'getSelectedConversation',
    }),
  },
  data() {
    return {
      text: '',
    };
  },

  methods: {
    ...mapActions({
      postMessage: 'postNewMessageAction',
    }),

    onNewPost() {
      const newMessage = {
        ...emptyMessage,
        text: this.text,
        conversationId: this.conversation.conversationId,
        authorParticipantId: this.loggedUser.id,
      };
      this.$chatHub.sendMessage(newMessage);
      this.text = null;
    },

    onPrependMenuOpen() {
      console.log('open menu ');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .wrapper {
    max-width: $ign-readable-width;
    padding: $ign-padding-normal;
    margin-left: auto;
    margin-right: auto;
  }

</style>
