<template>
  <div class="content">

    <v-col class="ma-3" cols="4">

      <div>
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

        <div class="mt-1 space-between">
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

      </div>

    </v-col>

  </div>
</template>
<script>
import { constTaskTypes } from '@/consts';

export default {
  name: 'RaiseTask',

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
    };
  },

  methods: {

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

</style>
