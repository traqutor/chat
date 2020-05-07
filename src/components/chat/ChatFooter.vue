<template>

  <v-row class="wrapper">

    <v-textarea
      v-model="text"
      solo
      background-color="#3d464f"
      rounded
      rows="2"
      name="text"
      label="Type a message..."
    ></v-textarea>

    <v-btn
      :disabled="!text"
      @click="onNewPost"
      class="mx-2"
      fab
      color="blue">
      <v-icon dark>mdi-send</v-icon>
    </v-btn>


  </v-row>

</template>

<script>
import { mapActions } from 'vuex';
import { emptyMessage } from '@/store/chat/types';

export default {
  name: 'ChatFooter',
  props: ['conversation'],
  data() {
    return {
      text: null,
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
      };
      this.$chatHub.sendMessage(newMessage);
      this.text = null;
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .wrapper {
    padding: $ign-padding-normal;
  }
</style>
