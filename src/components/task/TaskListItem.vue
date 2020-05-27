<template>
  <v-row no-gutters
  class="task-list-item task-pre-label"
  :style="{ borderColor: getColor(item.typeName) }">

    <v-col
      cols="3"
      class="flex-grow-0 flex-shrink-0 align-self-center pr-9"
    >
      <v-row class="d-flex" dense>
        <div class="align-self-center">
          {{ item.title }}
        </div>
        <div class="ml-auto caption text--disabled">
          #{{ item.referenceNumber }}
        </div>
      </v-row>
    </v-col>

    <v-col
      cols="1"
      class="flex-grow-1 flex-shrink-0 align-self-center subtitle-2"
    >
      {{ item.createdTimeOffset | timeOffsetFilter }}
    </v-col>

    <v-col
      cols="3"
      class="flex-grow-1 flex-shrink-0"
    >
      <v-row class="d-flex" dense>
        <user-avatar :user-id="getUserByRoleId(item.requestorSystemRoleId).userId" />

        <div class="pl-3 align-self-center">
          <div>{{getUserByRoleId(item.requestorSystemRoleId).userName}}</div>
          <div class="caption text--disabled" >
            {{getUserByRoleId(item.requestorSystemRoleId).roleName}}
          </div>
        </div>
      </v-row>

    </v-col>

    <v-col
      cols="5"
      style="min-width: 100px;"
      class="flex-grow-0 flex-shrink-1 align-self-center"
    >
      <div class="d-flex justify-end align-self-center pr-9"  >

        <v-btn fab x-small color="blue" class="mr-2">
          <v-icon>mdi-message-text-outline</v-icon>
        </v-btn>

        <v-btn fab x-small color="blue" class="mr-9">
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>

      </div>
    </v-col>

    <v-col
      cols="1"
      class="flex-grow-1 flex-shrink-0 align-self-center subtitle-2"
    >
      {{ item.priority }}
      <StatusBadge :status="item.status" />
    </v-col>


  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { constTaskTypes } from '@/consts';
import UserAvatar from '@/components/user/UserAvatar.vue';
import StatusBadge from '@/components/StatusBadge.vue';

export default {
  name: 'TaskListItem',

  props: ['item'],

  computed: {
    ...mapGetters({
      getUserByRoleId: 'getUserByRoleId',
    }),
  },

  components: {
    'user-avatar': UserAvatar,
    StatusBadge,
  },

  methods: {

    getColor(type) {
      return constTaskTypes.find((item) => item.TaskTypeCode === type)
        ? constTaskTypes.find((item) => item.TaskTypeCode === type).BackgroundColor
        : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.task-list-item {
  flex-wrap: nowrap;
  border-radius: 4px;
  border-left: 8px solid;
  padding-left: 16px;
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
