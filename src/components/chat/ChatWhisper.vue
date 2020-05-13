<template>
  <div>

    <perfect-scrollbar
      id="chat-whisper"
      v-scroll:#chat-whisper="onScroll"
      ref="chatWhisper"
      class="chat-wrapper"
      >

      <div class="pb-3 chat-readable-space">

        Chat Whisper

      </div>


    </perfect-scrollbar>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ChatWhisper',

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
      const container = this.$refs.chatWhisper.$el;
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
