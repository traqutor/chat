<template>
  <div class="ign-item d-flex">

    <conversation-avatar :conversation="conversation" />

    <div class="pl-5 width-100">

      <div class="d-flex">
        <div class="d-flex">
          <span class="body-1 font-weight-regular" >{{ conversation.topic }}</span>
        </div>
        <div
          v-if="showDetails"
          class="text--disabled caption ml-auto"
        >
          {{ conversation.lastActivityTimeOffset | timeOffsetFilter }}
        </div>
      </div>

      <div class="d-flex align-content-start flex-wrap">
        <span class="body-2 text--secondary">
          {{conversation.lastConversationMessageSenderUserName}}
        </span>
        <role-badge :data="conversation.lastConversationMessageSenderRoleName"/>
      </div>

      <div v-if="showDetails" class="d-flex mt-2">
        <div class="d-flex pr-3">
          <span class="caption text--secondary">{{conversation.lastConversationMessageText}}</span>
        </div>
        <div class="d-flex ml-auto pa-2 mr-2">
          <v-badge
            :value="conversation.unreadConversationMessagesCount"
            color="blue"
            :content="conversation.unreadConversationMessagesCount"></v-badge>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
import ConversationAvatar from './ConversationAvatar.vue';
import RoleBadge from '../RoleBadge.vue';

export default {
  name: 'ConversationListItem',

  components: {
    'conversation-avatar': ConversationAvatar,
    'role-badge': RoleBadge,
  },
  props: ['conversation', 'showDetails'],
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/variables';

  .width-100 {
    width: 100%;
  }

</style>
