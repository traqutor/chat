<template>
  <div v-if="userId !== ''" class="ign-avatar" >
    <img v-if="!getUserAvatarUrlById(userId)" src="../../assets/images/avatar-3.jpg">
    <img v-else :src="getUserAvatarUrlById(userId)">
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'UserAvatar',

  props: ['userId'],

  computed: {
    ...mapGetters({
      getUserAvatarUrlById: 'getUserAvatarUrlById',
    }),
  },

};
</script>
