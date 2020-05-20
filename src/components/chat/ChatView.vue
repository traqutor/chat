<template>
  <div class="chat-sub-header-section">

    <perfect-scrollbar
      id="chat-container"
      v-scroll:#chat-container="onScroll"
      ref="chatContainer"
      class="chat-chat-perfect-scrollbar"
    >

      <div
        v-for="(post, idx) of messages"
        :key="post.messageId">

        <div
          v-if="idx === 0 || getIfNextPeriodToDisplay(
              post.createdTimeOffset,
              messages[idx - 1].createdTimeOffset)"
          class="chat-day-divider">
          {{ post.createdTimeOffset | timeDividerFilter }}
        </div>

        <div v-if="conversation.authorId === post.authorParticipantId"
             class="logged-user-posts">

          <div
            v-if="idx ===0 || post.authorParticipantId !== messages[idx - 1].authorParticipantId"
            class="ma-3"
          ></div>

          <v-card
            class="ml-auto"
            color="primary"
            :max-width="post.attachmentIds && post.attachmentIds.length > 0 ? '400' : null">

            <chat-attachment-thumbnail
              v-if="post.attachmentIds && post.attachmentIds.length > 0"
              :attachment-id="post.attachmentIds[0]"
            />

            <v-card-text class="text--primary">

            <span>{{ post.text }}</span>

            <span class="caption text--disabled">

              <v-icon class="ml-2" color="green" small>mdi-check-all</v-icon>

              <span v-if="post.recipientIdListWhoReadMessage" class="read-mark">
                {{ post.recipientIdListWhoReadMessage.length }}
              </span>

              <span
                class="v-list-item--link "
                @click="onMessageDetails(post)">
                {{ post.createdTimeOffset | timeOffsetFilter }}
              </span>

            </span>

            </v-card-text>
          </v-card>

        </div>

        <div v-else class="other-user-posts">

          <div
            v-if="idx > 0 && post.authorParticipantId !== messages[idx - 1].authorParticipantId"
          >

            <user-list-item :user="getUserById(post.authorParticipantId)" />

          </div>

          <v-card
            class=""
            color="secondary"
            :max-width="post.attachmentIds && post.attachmentIds.length > 0 ? '400' : null">

            <chat-attachment-thumbnail
              v-if="post.attachmentIds && post.attachmentIds.length > 0"
              :attachment-id="post.attachmentIds[0]"
            />

            <v-card-text class="text--primary">

              <span>{{ post.text }}</span>

            <span class="caption text--disabled">

              <v-icon color="blue" class="ml-2" small>mdi-check-all</v-icon>

              <span v-if="post.recipientIdListWhoReadMessage" class="read-mark">
                {{post.recipientIdListWhoReadMessage.length}}
              </span>

              <span
                class="v-list-item--link "
                @click="onMessageDetails(post)">
                {{ post.createdTimeOffset | timeOffsetFilter }}
              </span>

            </span>

            </v-card-text>

          </v-card>

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

    <chat-footer/>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import ChatFooter from '@/components/chat/ChatFooter.vue';
import ChatAttachmentThumbnail from '@/components/chat/ChatAttachmentThumbnail.vue';
import UserListItem from '@/components/user/UserListItem.vue';
import { CHAT_VIEW_MODE } from '@/store/chat/types';

export default {
  name: 'ChatView',

  props: ['conversation'],

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
      CHAT_VIEW_MODE,
    };
  },

  components: {
    'user-list-item': UserListItem,
    'chat-footer': ChatFooter,
    'chat-attachment-thumbnail': ChatAttachmentThumbnail,
  },

  computed: {

    ...mapGetters({
      loggedUser: 'loggedUser',
      messages: 'getMessages',
      isLoading: 'getMessagesIsLoading',
      currentPage: 'getMessagesCurrentPage',
      pageCount: 'getMessagesPageCount',
      getUserById: 'getUserById',
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

    ...mapMutations({
      setSelectedMessage: 'setSelectedMessage',
    }),

    ...mapActions({
      loadMoreMessages: 'fetchMessages',
      setChatViewMode: 'setMessagesChatViewMode',
    }),

    onMessageDetails(post) {
      this.setSelectedMessage(post);
      this.setChatViewMode(this.CHAT_VIEW_MODE.MESSAGE_DETAILS);
    },

    getIfNextPeriodToDisplay(createdTimeOffset, nextCreatedTimeOffset) {
      return this.$options.filters.timeDividerFilter(createdTimeOffset)
          !== this.$options.filters.timeDividerFilter(nextCreatedTimeOffset);
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

  .chat-sub-header-section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 170px);
    max-height: calc(100vh - 170px);
  }

  .chat-chat-perfect-scrollbar {
    flex: auto;
    position: relative;
    padding: $ign-padding-normal;
  }

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

  .scroll-down-btn {
    position: absolute;
    bottom: 170px;
    right: 50px;
  }
</style>
