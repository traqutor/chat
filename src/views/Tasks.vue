<template>
    <tasks-kanban-board />
</template>

<script>
import TasksKanbanBoard from '@/components/task/TasksKanbanBoard.vue';

export default {
  name: 'Tasks',
  components: {
    TasksKanbanBoard,
  },
};
</script>
