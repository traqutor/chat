<template>

  <div class="wrapper">

    <v-textarea
      v-model="text"
      solo
      background-color="#3d464f"
      rows="1"
      name="text"
      label="Enter a message..."
      @keydown.enter.prevent="onNewConversationPost"
      apend-inner-icon="mdi-send"
      @click:apend-inner="onNewConversationPost"
      height="56px"
    ></v-textarea>

    <v-btn
      :disabled="!text"
      @click="onNewConversationPost"
      class="ma-2"
      fab
      small
      color="blue">
      <v-icon dark>mdi-send</v-icon>
    </v-btn>


  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'NewConversationFooter',
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

    onNewConversationPost() {
      // const newMessage = {
      //   ...emptyMessage,
      //   text: this.text,
      //   conversationId: this.conversation.conversationId,
      //   authorParticipantId: this.loggedUser.id,
      // };
      // this.$chatHub.sendMessage(newMessage);
      this.text = null;
    },

  },
};
</script>

<style scoped lang="scss">
  @import "../../../assets/styles/variables";

  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: $ign-readable-width;
    margin-left: auto;
    margin-right: auto;
  }

</style>
