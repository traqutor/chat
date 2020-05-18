<template>
  <div>

    <perfect-scrollbar
      id="chat-info"
      v-scroll:#chat-info="onScroll"
      ref="chatInfo"
      class="chat-wrapper"
      >

      <v-row class="pb-3 chat-readable-space">

        <v-col cols="6">
          <v-subheader>Administrator</v-subheader>

          <userListItem :user="getConversationCreator"></userListItem>

        </v-col>

        <v-col cols="6">


          <div>
            <v-subheader>
              Participants ({{ conversation.conversationParticipantDtos.length }})

              <v-btn icon class="ml-auto">
                <v-icon>mdi-account-plus-outline</v-icon>
              </v-btn>

            </v-subheader>

            <template v-for="participant of conversation.conversationParticipantDtos">

                <userListItem
                  :user="participant"
                  :key="participant.id" ></userListItem>

            </template>

          </div>

        </v-col>

      </v-row>


    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserListItem from '@/components/user/UserListItem.vue';

export default {
  name: 'ChatInfo',

  props: ['conversation'],

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
    };
  },

  components: {
    userListItem: UserListItem,
  },

  computed: {

    ...mapGetters({

    }),

    getConversationCreator() {
      return this.conversation.conversationParticipantDtos
        .find((participant) => participant.isConversationCreator);
    },

  },

  methods: {

    ...mapActions({
    }),


    getParticipant(userId) {
      return this.conversation.conversationParticipantDtos.find((usr) => usr.id === userId);
    },

    onScroll() {
      const container = this.$refs.chatInfo.$el;
    },

  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .chat-wrapper {
    position: relative;
    padding: $ign-padding-normal;
    height: calc(100vh - #{$ign-header-height} - 94px);
  }

  .chat-readable-space {
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

</style>
