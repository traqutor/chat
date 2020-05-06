<template>
  <div class="ign-item">

    <conversation-avatar />

    <div class="ign-item-info-wrap">

      <div class="ign-item-info-row">
        <div class="title">{{conversation.topic}}</div>
        <slot name="status"/>
      </div>

      <div class="ign-item-info-row">
        <span class="second-line">{{conversation.lastConversationMessageSenderUserName}}</span>
        <role-badge :data="conversation.lastConversationMessageSenderRoleName"/>
      </div>

      <slot name="details"/>

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
  props: ['conversation'],
};
</script>

<style scoped lang="scss">
  @import '../../assets/styles/variables';


</style>
