<template>
  <v-card color="secondary" class="mb-1 pa-3">
    <h3>{{data}}</h3>
    <p>
      {{data}}
    </p>
  </v-card>
</template>

<script>
export default {
  name: 'TaskItem',
  props: ['data'],
  methods: {
    markDone() {
      this.$emit('done', this.data);
    },
  },
};
</script>
