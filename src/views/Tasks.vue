<template>
  <section class="mt-3">

    <v-tabs
      background-color="background"
      fixed-tabs
      v-model="tab"
    >
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
    </v-tabs>


  <v-tabs-items v-model="tab">
    <v-tab-item
      v-for="item in items"
      :key="item.tab"
      :transition="false"
      :reverse-transition="false"
    >
      <component v-bind:is="item.content"></component>
    </v-tab-item>
  </v-tabs-items>

  </section>
</template>

<script>
import TasksKanbanBoardTab from '@/components/task/TasksKanbanBoardTab.vue';
import TasksListTab from '@/components/task/TasksListTab.vue';
import TaskProgressTab from '@/components/task/TaskProgressTab.vue';
import RaiseTaskTab from '@/components/task/RaiseTaskTab.vue';
import SettingsSelector from '@/components/SettingsSelector.vue';

export default {
  name: 'Tasks',
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Board', content: 'TasksKanbanBoardTab' },
        { tab: 'Task List', content: 'TasksListTab' },
        { tab: 'Raise Task', content: 'RaiseTaskTab' },
        { tab: 'Map', content: 'SettingsSelector' },
        { tab: 'Manage', content: 'SettingsSelector' },
        { tab: 'Progress', content: 'TaskProgressTab' },
      ],
    };
  },
  components: {
    TasksKanbanBoardTab,
    TasksListTab,
    SettingsSelector,
    RaiseTaskTab,
    TaskProgressTab,
  },
};
</script>
