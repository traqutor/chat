<template>
  <div v-if="user.userId !== ''" class="user-simple-item">

    <div class="ign-avatar" >
      <img :src="getUserAvatarUrlById(user.userId)">
    </div>

    <div class="user-info">
      <p v-if="user" class="name">
        {{ user.userName }}
      </p>
      <span v-if="user.role" class="role">{{user.role[0]}}</span>
      <span v-else class="role">{{user.roleName}}</span>
    </div>

    <slot></slot>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserListItem',

  props: ['user'],

  computed: {
    ...mapGetters({
      getUserAvatarUrlById: 'getUserAvatarUrlById',
    }),
  },


};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .user-simple-item {
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .user-info {
    margin: 8px 16px;
  }

  .name {
    padding: 0;
    margin: 0;
    font-weight: bold;
  }

  .role {
    color: $ign-color-opacity-middle;
    font-size: 12px;
    box-sizing: border-box;
    display: block;
    font-weight: 400;
    height: 18px;
    line-height: 18px;
    text-align: left;
    text-size-adjust: 100%;
    visibility: visible;
  }

</style>
