<template>
    <div class="chat-sub-header-section">

      <perfect-scrollbar
        class="chat-perfect-scrollbar"
      >

        <v-row class="pb-3 chat-readable-space">

          <v-col cols="6">

        <v-subheader>Message</v-subheader>

            <div class="dialog-group-message">
              {{ message.text }}
            </div>

            <div class="d-flex mt-3">
              Send <span class="ml-auto">{{ message.createdTimeOffset }}</span>
            </div>

            <div class="d-flex mt-3">
              Acknowledgement requested?
              <span class="ml-auto">{{ message.messageAcknowledgeDtos }}</span>
            </div>

          </v-col>

          <v-col cols="6">

            <v-subheader>Message</v-subheader>

            <v-subheader>Recipients</v-subheader>


          </v-col>

        </v-row>

      </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatMessageDetails',

  computed: {
    ...mapGetters({
      message: 'getSelectedMessage',
    }),
  },

};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";

  .chat-sub-header-section {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 170px);
  max-height: calc(100vh - 170px);
  }

  .chat-perfect-scrollbar {
  flex: auto;
  position: relative;
  padding: $ign-padding-normal;
  }

  .dialog-group-message {
    padding: .75rem 1rem;
    background-color: $ign-secondary-dark;
    color: var(--light);
    font-size: .813rem;
    margin-bottom: .25rem;
    border-radius: .25rem;
    display: inline-block;
    position: relative;
  }

</style>
