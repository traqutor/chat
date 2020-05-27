<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,

  name: 'TaskBarChart',

  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    },
  }),

  props: {
    chartdata: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style lang="scss" scoped>
</style>
