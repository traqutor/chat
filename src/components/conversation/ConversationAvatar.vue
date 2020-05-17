<template>
  <div>
    <div
      class="ign-avatar">
      <v-icon>mdi-account-multiple</v-icon>
      <div class="small-avatar">
        <user-avatar :userId="conversation.lastConversationMessageSenderUserId" />
      </div>
    </div>

  </div>
</template>

<script>
import UserAvatar from '@/components/user/UserAvatar.vue';

export default {
  name: 'ConversationAvatar',

  props: ['conversation'],

  components: {
    'user-avatar': UserAvatar,
  },

};
</script>

<style lang="scss" scoped>
  .small-avatar {
    position: absolute;
    height: 24px;
    width: 24px;
    bottom: 15%;
    right: 15%;
    display: block;
    background: #5699cd;
    color: #fff;
    box-shadow: rgb(24, 34, 45) 0px 0px 0px 2.88px;
    z-index: 2;
    transition: all .3s ease;
    transform: translate(50%, 50%);
    border-radius: 50%;
    cursor: pointer;
    .ign-avatar {
      height: 24px !important;
      width: 24px !important;
    }
  }
</style>
