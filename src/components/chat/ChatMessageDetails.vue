<template>
    <div class="chat-sub-header-section">

      <perfect-scrollbar
        class="chat-perfect-scrollbar"
      >

        <v-row class="pb-3 chat-readable-space">

          <v-col cols="6">

            <v-subheader>Message</v-subheader>

            <div class="pl-3">

              <div class="dialog-group-message">
                {{ message.text }}
              </div>

              <div class="d-flex mt-3">
                Send
                <span class="ml-auto">
                  {{ message.createdTimeOffset | messageDetailTimeOffsetFilter }}
                </span>
              </div>

              <div class="d-flex mt-3">
                Acknowledgement requested?
                <span class="ml-auto">{{ message.messageAcknowledgeDtos }}</span>
              </div>

            </div>

          </v-col>

          <v-col cols="6">

            <v-subheader>Sender</v-subheader>
              <div class="pl-4">
                <user-list-item :user="getUserById(message.authorParticipantId)"/>
              </div>

            <v-subheader>
              Recipients ({{message.recipientIdListWhoReadMessage.length}})
            </v-subheader>

            <div class="pl-4">
              <template v-for="(recipient) of message.recipientIdListWhoReadMessage">
                <user-list-item :key="recipient.id" :user="getUserById(recipient)" />
              </template>
            </div>

          </v-col>

        </v-row>

      </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';


export default {
  name: 'ChatMessageDetails',

  components: {
    'user-list-item': UserListItem,
  },

  computed: {
    ...mapGetters({
      message: 'getSelectedMessage',
      getUserById: 'getUserById',
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
