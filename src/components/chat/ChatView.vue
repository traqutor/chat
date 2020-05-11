<template>
  <div
    id="chat-container"
    v-scroll:#chat-container="onScroll"
    ref="chatContainer"
    class="chat-wrapper"
    >

    <div class="chat-readable-space">

      <div
        v-for="(post, idx) of messages"
        :key="post.messageId">

        <div v-if="conversation.authorId === post.authorParticipantId"
             class="logged-user-posts">

          <div v-if="idx > 0 && post.authorParticipantId !== messages[idx - 1].authorParticipantId"
          class="ma-3"
          ></div>

          <div class="ign-post-right-item">
            <span>{{ post.text }}</span>
            <span class="ign-post-status icon-mark">
              <v-icon>mdi-done-all</v-icon> <span class="read-mark"> 4/12 </span>
              {{ post.createdTimeOffset | timeOffsetFilter }}
            </span>
          </div>

        </div>

        <div v-else class="other-user-posts">

          <div v-if="idx > 0 && post.authorParticipantId !== messages[idx - 1].authorParticipantId"
          class="ma-3">
            {{ getParticipant(post.authorParticipantId).userName }}
          </div>

          <user-list-item :user="getParticipant(post.authorParticipantId)"/>

          <div class="ign-post-left-item">

            <span>{{ post.text }}</span>

            <span class="ign-post-status icon-mark-active">

            <v-icon>mdi-done-all</v-icon> <span class="read-mark"> 4/12 </span>
            {{ post.createdTimeOffset | timeOffsetFilter }}
          </span>

          </div>

        </div>

      </div>

      <v-tooltip v-if="isScrollUp" top>
        <template v-slot:activator="{ on }">
          <v-btn
            @click="onToTheBottom "
            class="scroll-down-btn"
            v-on="on"
            icon fab small>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <span>To the bottom</span>
      </v-tooltip>

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import UserListItem from '../user/UserListItem.vue';

export default {
  name: 'ChatView',

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
    };
  },

  computed: {

    ...mapGetters({
      loggedUser: 'loggedUser',
      conversation: 'getSelectedConversation',
      messages: 'getMessages',
      isLoading: 'getMessagesIsLoading',
      currentPage: 'getMessagesCurrentPage',
      pageCount: 'getMessagesPageCount',
    }),

    changeConversation() {
      return this.conversation;
    },
    scrollToEndOnMessages() {
      return this.messages;
    },
  },

  components: {
    'user-list-item': UserListItem,
  },

  watch: {

    changeConversation() {
      this.isScrollUp = false;
    },

    scrollToEndOnMessages() {
      this.$nextTick(() => {
        this.scrollToEnd();
      });
    },
  },

  methods: {

    ...mapActions({
      loadMoreMessages: 'fetchMessages',
    }),

    getParticipant(userId) {
      return this.conversation.conversationParticipantDtos.find((usr) => usr.id === userId);
    },

    onScroll(e) {
      const container = this.$refs.chatContainer;

      if (this.tmpScrollTop > e.target.scrollTop) {
        console.log('scroll UP');
        if (this.tmpScrollTop > e.target.scrollTop) {
          this.tmpScrollTop = e.target.scrollTop;
          this.isScrollUp = true;
          if (!this.isLoading
            && this.pageCount > this.currentPage) {
            const page = this.currentPage + 1;
            const { conversationId } = this.conversation;
            this.loadMoreMessages({
              conversationId,
              page,
            });
          }
        }
      } else {
        console.log('scroll DOWN');
        if (container.clientHeight + e.target.scrollTop >= container.scrollHeight - 50) {
          this.isScrollUp = false;
        }
      }
      this.tmpScrollTop = e.target.scrollTop;
    },

    onToTheBottom() {
      this.isScrollUp = false;
      this.scrollToEnd();
    },

    scrollToEnd() {
      if (!this.isScrollUp) {
        const container = this.$refs.chatContainer;
        container.scrollTop = container.scrollHeight;
        this.tmpScrollTop = container.scrollTop;
      }
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .other-user-posts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-bottom: 4px;
  }

  .logged-user-posts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 4px;
  }

  .chat-day-divider {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: $ign-padding-normal;
    font-size: 14px;
    color: $ign-blue;
  }

  .icon-mark > i {
    height: 14px;
  }

  .icon-mark-active > i {
    height: 14px;
    color: $ign-blue !important;
  }

  .read-mark-active {
    padding-right: $ign-padding-normal;
    cursor: pointer;
    color: $ign-blue;
  }

  .read-mark-active:hover {
    text-decoration: underline;
  }

  .read-mark {
    padding-right: $ign-padding-normal;
    cursor: pointer;
  }

  .chat-wrapper {
    padding: $ign-padding-normal;
    height: calc(100vh - 274px);
    overflow-y: hidden;
  }

  .chat-wrapper:hover {
    overflow-y: auto;
  }

  .chat-readable-space {
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

  .scroll-down-btn {
    position: absolute;
    bottom: 150px;
    right: 50px;
  }
</style>
