<template>
  <div class="content background-styled">

    <v-col class="ma-3" cols="4">

      <div v-if="!isNewTaskAdd"
           class="task-types-list-section">

        <v-text-field
          solo
          dense
          label="Search"
          background-color="secondary"
          append-icon="mdi-magnify"
          v-model="searchText"
          @click:append="search"
          hide-details
        ></v-text-field>

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

        <perfect-scrollbar class="task-list-wrapper">

          <v-list dense class="background-styled">
            <v-list-item-group color="primary">
              <v-list-item
                @click="selectTastType(item)"
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

        </perfect-scrollbar>

      </div>

      <div v-else class="ma-3">
        <v-btn small @click="isNewTaskAdd=false">
          <v-icon>mdi-arrow-back</v-icon>
          Back
        </v-btn>

        <v-list class="background-styled">
            <v-list-item>
              <v-list-item-icon>
                <div class="task-indicator"
                     :style="{ 'background-color': taskTypeSelected.BackgroundColor }"></div>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="taskTypeSelected.ShortName"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          <v-divider />

        </v-list>

        <v-form >

          <div v-for="item of taskTypeSelected.ExtensibleFields"
               :key="item.Code">
            <v-text-field
              :label="item.Name"
            ></v-text-field>
          </div>

        </v-form>

      </div>

    </v-col>
    <v-col cols="8">

    </v-col>
  </div>
</template>
<script>
import { constTaskTypes } from '@/consts';

export default {
  name: 'RaiseTaskTab',

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

  methods: {

    selectTastType(item) {
      this.isNewTaskAdd = true;
      this.taskTypeSelected = item;
    },

    search() {
      console.log('search');
    },

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
  @import "../../assets/styles/variables";

  .task-types-list-section {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 170px);
    max-height: calc(100vh - 170px);
  }

  .task-list-wrapper {
    flex: auto;
    position: relative;
  }

  .task-indicator {
    width: 22px;
    height: 22px;
    border-radius: 4px;
  }

</style>
