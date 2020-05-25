<template>
<v-card class="mx-auto" color="#18222d">
  <v-container>
    <v-row>
              <v-col>
                    <v-card outlined tile color="#18222d">
                      <CountsTaskList />
                    </v-card>
                </v-col>

                <v-col>
                    <v-card outlined tile color="#18222d">
                      <div>
                        <div
                          style="display: flex;
                          align-items: center;
                          justify-content: center;">
                          <div>
                            <div style="justify-content: center;
                            display: flex;
                            margin-bottom: 10px">
                              Tasks by Type
                            </div>
                            <TaskBarChart
                              v-bind:chartdata="chartBarOne"
                            />
                          </div>
                        </div>

                        <br/>

                        <div
                          style="display: flex;
                          align-items: center;
                          justify-content: center;">
                          <div>
                            <div style="justify-content: center;
                            display: flex;
                            margin-bottom: 10px">
                              Tasks by Status
                            </div>
                            <TaskBarChart
                              v-bind:chartdata="chartBarTwo"
                            />
                          </div>
                        </div>
                      </div>
                    </v-card>
                </v-col>

                <v-col>
                    <v-card outlined tile>

                    </v-card>
                </v-col>
            </v-row>
  </v-container>
</v-card>
</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapActions,
} from 'vuex';
import CountsTaskList from '@/components/task/taskProgressTabComponents/CountsTaskList/CountsTaskList.vue';
import TaskBarChart from '@/components/task/taskProgressTabComponents/TaskBarChart.vue';

export default {
  name: 'TaskProgressTab',

  data() {
    return {
      chartBarOne: {
        labels: ['Check medication fridge', 'Discharge Clean'],
        datasets: [
          {
            backgroundColor: '#f87979',
            data: [40, 20],
          },
        ],
      },
      chartBarTwo: {
        labels: ['New', 'Started', 'Queued', 'On  Hold', 'Overdue', 'Completed'],
        datasets: [
          {
            backgroundColor: '#f87979',
            data: [40, 20],
          },
        ],
      },
    };
  },

  computed: {
    ...mapGetters({

    }),
  },

  components: {
    CountsTaskList,
    TaskBarChart,
  },

  methods: {
    ...mapActions({}),

    ...mapMutations({}),
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
</style>
