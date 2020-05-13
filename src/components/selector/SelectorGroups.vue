<template>

  <perfect-scrollbar
    id="scroll-on-groups"
    v-scroll:#scroll-on-groups="onScroll"
    class="selector-list-section pr-3">

    List of groups

  </perfect-scrollbar>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SelectorGroups',

  components: {
  },

  computed: {
    ...mapGetters({
    }),
  },

  methods: {
    ...mapActions({
    }),

    onScroll() {
      // todo
    },

  },
};
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/variables';

  .selector-list-section{
    position: relative;
    margin-top: 14px;
    height: calc(100vh - #{$ign-header-height} - 94px);
  }

</style>
