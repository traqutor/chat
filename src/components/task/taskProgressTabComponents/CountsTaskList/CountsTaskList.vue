<template>
<v-card elevation="0">
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-card>
          <v-btn style="width: 100%;" depressed color="primary">Clinical</v-btn>
        </v-card>
        </v-col>

        <v-col>
          <v-card>
            <v-btn
            style="width: 100%"
            depressed>Maint</v-btn>
          </v-card>
        </v-col>

        <v-col>
          <v-card>
            <v-btn style="width: 100%" depressed >Porter</v-btn>
          </v-card>
      </v-col>
    </v-row>

    <div style="margin-top: 30px">
      <div style="display: flex">
        <div style="flex: 1; font-weight: 500;">
          Type
        </div>

        <div style="font-weight: 500;">
          Tasks
        </div>
      </div>

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

export default {
  name: 'CountsTaskList',

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
  },
};
</script>

<style lang="scss" scoped>
</style>
