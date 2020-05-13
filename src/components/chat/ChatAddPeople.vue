<template>
  <div>

    <perfect-scrollbar
      id="chat-add-people"
      v-scroll:#chat-add-people="onScroll"
      ref="chatAddPeople"
      class="chat-wrapper"
      >

      <div class="pb-3 chat-readable-space">

        Chat Add People

      </div>


    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ChatAddPeople',

  props: ['conversation'],

  data() {
    return {
      isScrollUp: false,
      tmpScrollTop: 0,
    };
  },


  computed: {

    ...mapGetters({

    }),

  },

  methods: {

    ...mapActions({

    }),


    getParticipant(userId) {
      return this.conversation.conversationParticipantDtos.find((usr) => usr.id === userId);
    },

    onScroll() {
      const container = this.$refs.chatAddPeople.$el;
    },

  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .chat-wrapper {
    position: relative;
    padding: $ign-padding-normal;
    height: calc(100vh - #{$ign-header-height} - 94px);
  }

  .chat-readable-space {
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

</style>
