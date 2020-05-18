<template>
  <div v-if="user.userId !== ''" class="user-simple-item">

    <user-avatar :userId="user.userId" />

    <div class="pa-3 flex-column">
      <div v-if="user" class="font-weight-regular">
        {{ user.userName }}
      </div>
      <div v-if="user.role" class="body-2 text--disabled">{{user.role[0]}}</div>
      <div v-else class="body-2 text--disabled">{{user.roleName}}</div>
    </div>

    <slot></slot>

  </div>
</template>

<script>
import UserAvatar from '@/components/user/UserAvatar.vue';

export default {
  name: 'UserListItem',

  props: ['user'],

  components: {
    'user-avatar': UserAvatar,
  },

};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .user-simple-item {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

</style>
