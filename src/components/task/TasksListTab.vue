<template>
  <div class="tasks-sub-toolbar-section background-styled">

    <div class="d-flex ma-4">

      <div class="mr-1 flex-grow-1"
           v-for="(column) in columns"
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

      </div>

    </div>

    <v-row no-gutters class="mr-3 pa-3">

      <v-col
        cols="3"
        class="flex-grow-0 flex-shrink-0 body-2"
      >
        Type
      </v-col>

      <v-col
        cols="1"
        class="flex-grow-1 flex-shrink-0 body-2"
      >
        Raised At
      </v-col>

      <v-col
        cols="3"
        class="flex-grow-1 flex-shrink-0 body-2"
      >
        Raised By
      </v-col>

      <v-col
        cols="5"
        style="min-width: 100px;"
        class="flex-grow-0 flex-shrink-1 body-2"
      >
        Status
      </v-col>

    </v-row>

    <perfect-scrollbar class="tasks-perfect-scrollbar">

      <v-expansion-panels >
        <v-expansion-panel class="background-styled"
          v-for="(item) of tasks"
          :key="item.id"
        >
          <v-expansion-panel-header >
            <task-list-item :item="item"/>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
             {{ item }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import TaskListItem from '@/components/task/TaskListItem.vue';

export default {
  name: 'TasksKanbanBoard',

  computed: {
    ...mapGetters({
      columns: 'getAllColumns',
      tasks: 'getAllTasks',
    }),
  },

  components: {
    'task-list-item': TaskListItem,
  },

  methods: {
    ...mapActions({
    }),

    ...mapMutations({
    }),

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
    position: relative;
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
