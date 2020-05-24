<template>
  <v-card
    class="mb-1 task-card"
    :color="getCardColor(item.status)">

    <v-list-item dense>
      <v-list-item-avatar>
        <user-avatar :user-id="getUserByRoleId(item.requestorSystemRoleId).userId" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle class="text--primary">
          {{getUserByRoleId(item.requestorSystemRoleId).userName}}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-list-item-action-text>
          {{ item.createdTimeOffset | timeOffsetFilter }}
        </v-list-item-action-text>
        <v-list-item-action-text>
          {{ item.priority }}
        </v-list-item-action-text>

      </v-list-item-action>
    </v-list-item>

     <div class="font-weight-light body-2 pl-3 pr-3" v-text="item.notes"></div>

    <v-card-actions class="ml-3">
      <div
        v-for="roleId of item.participantsIds.slice(0, 4)"
        :key="roleId"
      >
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <div class="small-avatar" v-on="on">
              <user-avatar :user-id="getUserByRoleId(roleId).userId" />
            </div>
          </template>
          <span>{{ getUserByRoleId(roleId).userName }}</span>
        </v-tooltip>
      </div>

      <div v-if="item.participantsIds.length > 4"
           class="participant-badge">
        +{{item.participantsIds.length - 4}}
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import { TASK_STATUS } from '@/store/task/types';
import UserAvatar from '@/components/user/UserAvatar.vue';

export default {
  name: 'TaskItem',

  props: ['item'],

  computed: {
    ...mapGetters({
      getUserByRoleId: 'getUserByRoleId',
    }),
  },

  components: {
    'user-avatar': UserAvatar,
  },

  methods: {
    markDone() {
      this.$emit('done', this.data);
    },

    getCardColor(type) {
      switch (type) {
        case TASK_STATUS.New: return '#0F5CB0';
        case TASK_STATUS.Acknowledged: return '#39af4d';
        case TASK_STATUS.Resolved: return '#9B9B9B';
        case TASK_STATUS.Cancelled: return '#F5A625';
        case TASK_STATUS.Terminated: return '#CF021A';
        default: return 'primary';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
.task-card {
  max-width: 400px;
}

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
