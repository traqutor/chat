<template>
<v-card elevation="0" class="background-styled">
  <v-container>

    <div v-if="!isNewTaskAdd"
         class="task-types-list-section">

      <div class="ma-3 ">
        <v-btn
          v-for="(btn, idx) in taskFilterButtons"
          :key="btn.item"
          @click="filterItems(idx)"
          text small
          :color="btn.active ? 'primary' : ''"
        >
          {{btn.item}}
        </v-btn>
      </div>

      <v-subheader >
          <div style="flex: 1; font-weight: 500;">
            Type
        </div>

        <div style="font-weight: 500;">
          Tasks
        </div>
      </v-subheader>

      <perfect-scrollbar class="task-list-wrapper">

        <v-list dense class="background-styled">
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item) in taskTypes"
              :key="item.TaskTypeCode"
            >
              <v-list-item-icon>
                <div class="task-indicator"
                     :style="{ 'background-color': item.BackgroundColor }"> </div>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.ShortName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <div style="margin-top: 30px">

          <v-container>
            <div>
              <CountsTaskElement
                v-bind:color="'#6610f2'"
                v-bind:title="'Check medication fridge'"
                v-bind:countActive="'7'"
                v-bind:countTotal="'45'"
              />
              <CountsTaskElement
                v-bind:color="'#28a745'"
                v-bind:title="'Discharge Clean'"
                v-bind:countTotal="'7'"
              />
            </div>
          </v-container>
        </div>
      </perfect-scrollbar>

    </div>

  </v-container>
</v-card>
</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';
import CountsTaskElement from '@/components/task/taskProgressTabComponents/CountsTaskList/CountsTaskElement.vue';
import { constTaskTypes } from '@/consts';

export default {
  name: 'CountsTaskList',

  data() {
    return {
      searchText: '',
      isNewTaskAdd: false,
      taskFilterButtons: [
        { item: 'clinical', active: true },
        { item: 'maintenance', active: false },
        { item: 'porter', active: false },
      ],
      taskTypes: constTaskTypes,
      taskTypeSelected: null,
    };
  },

  computed: {
    ...mapGetters({

    }),
  },

  components: {
    CountsTaskElement,
  },

  methods: {
    ...mapActions({}),

    ...mapMutations({}),

    filterItems(index) {
      this.taskFilterButtons.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.active = false;
      });
      this.taskFilterButtons[index].active = true;
    },

  },
};
</script>

<style lang="scss" scoped>
  @import "../../../../assets/styles/variables";

  .task-types-list-section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 170px);
    max-height: calc(100vh - 170px);
  }

  .task-list-wrapper {
    flex: auto;
    position: relative;
    padding: $ign-padding-normal;
  }

  .task-indicator {
    width: 22px;
    height: 22px;
    border-radius: 4px;
  }

</style>
