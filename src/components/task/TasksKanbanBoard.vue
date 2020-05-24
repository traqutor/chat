<template>
  <div class="tasks-sub-toolbar-section ma-3">

    <perfect-scrollbar
      class="tasks-perfect-scrollbar"
    >

      <v-col
        v-for="(column, index) in columns"
        :key="column.id">

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ column.name }}</v-list-item-title>
          </v-list-item-content>

          <TaskViewDialog
            @taskData="onGetTaskData"
            v-if="index === 0"
          />

        </v-list-item>

        <Container
          group-name="col"
          @drop="(e) => onCardDrop(index, column.id, e)"
          :get-child-payload="getCardPayload(column.id)"
          drag-class="card-ghost"
          drop-class="card-ghost-drop"
          class="column-border pa-3"
        >

          <Draggable
            v-for="task in column.tasks"
            :key="task.id">
            <task-item
              :item="task"
              color="primary">
            </task-item>
          </Draggable>

        </Container>
      </v-col>

    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { Container, Draggable } from 'vue-smooth-dnd';
import TaskViewDialog from '@/components/task/TaskViewDialog.vue';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TasksKanbanBoard',

  computed: {
    ...mapGetters({
      columns: 'getAllColumns',
    }),
  },

  components: {
    TaskItem,
    TaskViewDialog,
    Container,
    Draggable,
  },

  methods: {
    ...mapActions({
      createNewTask: 'createNewTask',
      updateTaskStatus: 'updateTaskStatus',
    }),

    ...mapMutations({
      removeTask: 'removeTask',
      updateTask: 'updateTask',
    }),

    onGetTaskData(task) {
      this.createNewTask(task);
    },

    onCardDrop(columnIndex, columnId, dropResult) {
      if (dropResult.removedIndex !== null && dropResult.addedIndex !== null) {
        const task = { ...dropResult.payload };

        this.removeTask({
          columnIndex,
          taskIndex: dropResult.removedIndex,
        });

        this.updateTask({
          columnIndex,
          taskIndex: dropResult.addedIndex,
          task,
        });
      } else if (dropResult.removedIndex !== null && dropResult.addedIndex === null) {
        this.removeTask({
          columnIndex,
          taskIndex: dropResult.removedIndex,
        });
      } else if (dropResult.addedIndex !== null && dropResult.removedIndex === null) {
        const task = { ...dropResult.payload, status: columnId };
        this.updateTask({
          columnIndex,
          taskIndex: dropResult.addedIndex,
          task,
        });
        this.updateTaskStatus(task);
      }
    },

    getCardPayload(columnId) {
      return (index) => this.columns
        .filter((column) => column.id === columnId)[0].tasks[index];
    },

  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .tasks-sub-toolbar-section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 94px);
    max-height: calc(100vh - 94px);
  }

  .tasks-perfect-scrollbar {
    flex: auto;
    display: flex;
    position: relative;
    flex-direction: row;
    padding: $ign-padding-normal;
  }

  .column-border {
    border: 1px solid $ign-secondary;
    min-height: 124px;
    min-width: 200px;
  }

  .card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg)
  }

  .card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg)
  }

  .opacity-ghost {
    transition: all .18s ease;
    opacity: 0.8;
    /* transform: rotateZ(5deg); */
    background-color: cornflowerblue;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);
  }

  .opacity-ghost-drop {
    opacity: 1;
    /* transform: rotateZ(0deg); */
    background-color: white;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.0);
  }

</style>
