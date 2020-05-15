<template>

  <div class="wrapper">

    <v-text-field
      v-model="text"
      @change="setNewConversationMessageText(text)"
      solo
      background-color="#3d464f"
      rows="1"
      single-line
      name="text"
      label="Enter a message..."
      height="56px"
    ></v-text-field>

    <v-btn
      :disabled="!newConversation.topic ||
      !newConversation.messageText ||
      newConversation.roleIds.length <= 0"
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
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { VIEW_MODE } from '@/store/conv/types';

export default {
  name: 'NewConversationFooter',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser',
      newConversation: 'getNewConversation',
      selectedParticipants: 'getConversationSelectedParticipants',
    }),
  },
  data() {
    return {
      text: '',
    };
  },

  methods: {
    ...mapActions({
      createConversation: 'createNewConversation',
      setConversationMode: 'setConversationMode',
    }),

    ...mapMutations({
      setNewConversationMessageText: 'setNewConversationMessageText',
    }),

    onNewConversationPost() {
      this.createConversation();
      this.setConversationMode(VIEW_MODE.CHAT);
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
