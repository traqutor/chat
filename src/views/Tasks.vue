<template>
  <section>

    <v-tabs
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
    >
      <component v-bind:is="item.content"></component>
    </v-tab-item>
  </v-tabs-items>

  </section>
</template>

<script>
import TasksKanbanBoard from '@/components/task/TasksKanbanBoard.vue';
import TaskProgressTab from '@/components/task/TaskProgressTab.vue';
import RaiseTaskTab from '@/components/task/RaiseTaskTab.vue';

export default {
  name: 'Tasks',
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Task List', content: 'TasksKanbanBoard' },
        { tab: 'Map', content: 'SettingsSelector' },
        { tab: 'Raise Task', content: 'RaiseTaskTab' },
        { tab: 'Manage', content: 'SettingsSelector' },
        { tab: 'Progress', content: 'TaskProgressTab' },
      ],
    };
  },
  components: {
    TasksKanbanBoard,
    RaiseTaskTab,
    TaskProgressTab,
  },
};
</script>
