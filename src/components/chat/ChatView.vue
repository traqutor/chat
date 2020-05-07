<template>
  <div class="chat-wrapper">

    <div class="chat-readable-space">

      <div
        v-for="(post, idx) of messages"
        :key="post.messageId">
        <div v-if="loggedUser && loggedUser.id === post.authorParticipantId"
             class="logged-user-posts">

          <div class="ign-post-right-item">
            <span>{{ post.text }}</span>
            <span class="ign-post-status icon-mark">
            <v-icon>mdi-done-all</v-icon> <span class="read-mark"> 4/12 </span>
            {{ post.createdTimeOffset }}
          </span>
          </div>

        </div>

        <div v-else class="other-user-posts">
          <user-list-item v-if="idx === 0" :user="post.user"/>

          <div class="ign-post-left-item">

            <span>{{ post.text }}</span>

            <span class="ign-post-status icon-mark-active">

            <v-icon>mdi-done-all</v-icon> <span class="read-mark"> 4/12 </span>
            {{ post.createdTimeOffset }}
          </span>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserListItem from '../user/UserListItem.vue';

export default {
  name: 'ChatView',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser',
      messages: 'allMessages',
    }),
  },
  components: {
    'user-list-item': UserListItem,
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
    padding-bottom: 32px;
  }

  .logged-user-posts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 32px;
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
    max-height: calc(100vh - 274px);
    overflow-y: auto;
  }

  .chat-readable-space {
    margin-left: auto;
    margin-right: auto;
    max-width: 750px;
  }

</style>
