<template>
  <v-card
    color="secondary"
    class="mb-1 pa-3">
    <h3>{{ data.title }}</h3>
    <p>
      {{ data.note }}
    </p>
    <v-card-subtitle class="pb-3">Priority: {{ data.priority }}</v-card-subtitle>
    <v-card-actions>
      <div
        v-for="part of data.participants.slice(0, 4)"
        :key="part.userId"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <div class="small-avatar" v-on="on">
              <user-avatar :user-id="part.userId" />
            </div>
          </template>
          <span>{{ part.userName }}</span>
        </v-tooltip>
      </div>

      <div v-if="data.participants.length > 4"
           class="participant-badge">
        +{{data.participants.length - 4}}
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import UserAvatar from '@/components/user/UserAvatar.vue';

export default {
  name: 'TaskItem',

  props: ['data'],

  components: {
    'user-avatar': UserAvatar,
  },

  methods: {
    markDone() {
      this.$emit('done', this.data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.small-avatar {
  height: 24px;
  width: 24px;
  background: #5699cd;
  color: #fff;
  box-shadow: rgb(24, 34, 45) 0 0 0 2.88px;
  z-index: 2;
  transition: all .3s ease;
  border-radius: 50%;
  cursor: pointer;
  .ign-avatar {
    height: 24px !important;
    width: 24px !important;
  }
}

.participant-badge {
  text-align:center;
  line-height:28px;
  width:28px;
  height:28px;
  font-size: 12px;
  background-color: $ign-primary;
  border-radius: 50%;
  color: $ign-white;
  box-shadow: rgb(24, 34, 45) 0 0 0 2.88px;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 2;
  cursor: pointer;
}

</style>
