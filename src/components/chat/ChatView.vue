<template>
  <div>
    <perfect-scrollbar
      id="chat-container"
      v-scroll:#chat-container="onScroll"
      ref="chatContainer"
      class="chat-wrapper"
      >

      <div class="pb-3 chat-readable-space">

        <div
          v-for="(post, idx) of messages"
          :key="post.messageId">

          <div
            v-if="idx === 0 || getIfNextPeriodToDisplay(
              post.createdTimeOffset,
              messages[idx - 1].createdTimeOffset)"
            class="chat-day-divider">
            {{ post.createdTimeOffset | timeOffsetFilter }}
          </div>

          <div v-if="conversation.authorId === post.authorParticipantId"
               class="logged-user-posts">

            <div
              v-if="idx ===0 || post.authorParticipantId !== messages[idx - 1].authorParticipantId"
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

            <div
              v-if="idx > 0 && post.authorParticipantId !== messages[idx - 1].authorParticipantId"
              class="ma-3">
              {{ getParticipant(post.authorParticipantId).userName }}
            </div>

            <div class="ign-post-left-item">

              <span>{{ post.text }}</span>

              <span class="ign-post-status icon-mark-active">

              <v-icon>mdi-done-all</v-icon> <span class="read-mark"> 4/12 </span>
              {{ post.createdTimeOffset | timeOffsetFilter }}
            </span>

            </div>

          </div>

        </div>

      </div>


    </perfect-scrollbar>

    <div v-if="isScrollUp" class="scroll-down-btn">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn
            @click="onToTheBottom "
            v-on="on"
            icon fab small>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <span>To the bottom</span>
      </v-tooltip>
    </div>

    <chat-footer />

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ChatFooter from '@/components/chat/ChatFooter.vue';

export default {
  name: 'ChatView',

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
    };
  },

  components: {
    'chat-footer': ChatFooter,
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

    getIfNextPeriodToDisplay(createdTimeOffset, nextCreatedTimeOffset) {
      return this.$options.filters.timeOffsetFilter(createdTimeOffset)
        !== this.$options.filters.timeOffsetFilter(nextCreatedTimeOffset);
    },

    getParticipant(userId) {
      return this.conversation.conversationParticipantDtos.find((usr) => usr.id === userId);
    },

    onScroll(e) {
      const container = this.$refs.chatContainer.$el;

      if (e.target.scrollTop !== 0) {
        if (this.tmpScrollTop > e.target.scrollTop) {
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
        } else if (container.clientHeight + e.target.scrollTop >= container.scrollHeight - 50) {
          this.isScrollUp = false;
        }
        this.tmpScrollTop = e.target.scrollTop;
      }
    },

    onToTheBottom() {
      this.isScrollUp = false;
      this.scrollToEnd();
    },

    scrollToEnd() {
      if (!this.isScrollUp) {
        const container = this.$refs.chatContainer.$el;
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
    position: relative;
    padding: $ign-padding-normal;
    height: calc(100vh - 245px);
  }

  .chat-readable-space {
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

  .scroll-down-btn {
    position: absolute;
    bottom: 170px;
    right:50px;
  }
</style>
