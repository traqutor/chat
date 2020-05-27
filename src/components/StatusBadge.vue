<template>
  <span class="ign-role-badge ml-3 caption "
  :style="{ backgroundColor: getStatus().color}">
    {{getStatus().name}}
  </span>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'StatusBadge',
  props: ['status'],

  data() {
    return {
    };
  },

  methods: {
    getStatus() {
      return this.statuses.find((stat) => stat.id === this.status);
    },
  },

  computed: {
    ...mapGetters({
      statuses: 'getAllColumns',
    }),
  },
};
</script>

<style scoped>

  .ign-role-badge {
    height: 22px;
    border-radius: 10px;
    padding: 2px 8px;
  }

</style>
