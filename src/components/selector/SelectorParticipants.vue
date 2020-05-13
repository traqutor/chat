<template>

  <perfect-scrollbar
    id="scroll-on-participants"
    v-scroll:#scroll-on-participants="onScroll"
    class="selector-list-section pr-3">

    List of available participants

  </perfect-scrollbar>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SelectorParticipants',

  components: {
  },

  computed: {
    ...mapGetters({
    }),
  },

  methods: {
    ...mapActions({
    }),

    onScroll(e) {
      if (this.tmpScrollTop < e.target.scrollTop
          && e.target.scrollTop > e.target.scrollHeight / 2) {
        this.tmpScrollTop = e.target.scrollTop;
        if (!this.isLoading
            && this.conversations.pageCount > this.conversations.currentPage) {
          const page = this.conversations.currentPage + 1;
          this.loadMoreConversations(page);
        }
      }
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
