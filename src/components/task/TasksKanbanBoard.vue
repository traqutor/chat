<template>
  <div class="tasks-sub-toolbar-section ma-3">

    <perfect-scrollbar
      class="tasks-perfect-scrollbar"
    >

    <v-col
      v-for="(column, index) in columns.columns"
      :key="column.id">

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ column.name }}</v-list-item-title>
        </v-list-item-content>

        <TaskViewDialog v-if="index === 0" />

      </v-list-item>

      <Container
        group-name="col"
        @drop="(e) => onCardDrop(column.id, e)"
        @drag-start="(e) => log('drag start', e)"
        @drag-end="(e) => log('drag end', e)"
        :get-child-payload="getCardPayload(column.id)"
        drag-class="card-ghost"
        drop-class="card-ghost-drop"
      >
        <div class="column-border">

          <Draggable v-for="card in column.children" :key="card.id">
            <task-item
              :data="card.data"
              color="primary">
            </task-item>
          </Draggable>

        </div>
      </Container>
    </v-col>

    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { Container, Draggable } from 'vue-smooth-dnd';
import TaskViewDialog from '@/components/task/TaskViewDialog.vue';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TasksKanbanBoard',

  data() {
    return {
      dialog: false,
    };
  },

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

    ...mapMutations({
      addTask: 'addTask',
    }),

    onCardDrop(columnId, event) {
      console.log('onCardDrop', columnId, event);
    },

    getCardPayload(columnId) {
      console.log('getCardPayload', columnId);
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

.column-border{
  border: 1px solid $ign-secondary;
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
