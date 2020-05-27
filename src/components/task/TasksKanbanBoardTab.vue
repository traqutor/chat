<template>
  <div class="tasks-sub-toolbar-section background-styled">

    <perfect-scrollbar
      class="tasks-perfect-scrollbar"
    >

      <div class="flex-grow-1 mr-1"
           v-for="(column, index) in columns"
           :key="column.id">

        <v-card :color="column.color">
          <v-list-item dense>
            <v-list-item-content>
              <v-list-item-title>{{ column.name }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              {{ column.tasks.length }}
            </v-list-item-action>
          </v-list-item>
        </v-card>

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

      </div>

    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { Container, Draggable } from 'vue-smooth-dnd';
import TaskViewDialog from '@/components/task/TaskViewDialog.vue';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TasksKanbanBoardTab',

  computed: {
    ...mapGetters({
      columns: 'getAllColumns',
    }),
  },

  components: {
    TaskItem,
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
        const task = {
          ...dropResult.payload,
          status: columnId,
        };
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
    height: calc(100vh - 94px);
    max-height: calc(100vh - 94px);
  }

  .tasks-perfect-scrollbar {
    height: calc(100vh - 94px - 32px);
    max-height: calc(100vh - 94px - 32px);
    display: flex;
    position: relative;
    flex-direction: row;
    padding: $ign-padding-normal;
  }

  .column-border {
    min-height: 90%;
    min-width: 300px;
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
