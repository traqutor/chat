<template>
  <div class="cli-status">

    <v-icon>mdi-check</v-icon>

    {{ conversation.lastActivityTimeOffset | timeOffsetFilter }}

    <jumping-dots/>

  </div>
</template>

<script>
import JumpingDots from '../JumpingDots.vue';

export default {
  name: 'ConversationStatus',
  props: ['conversation'],
  components: {
    'jumping-dots': JumpingDots,
  },
};
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/variables";

  .cli-status {
    min-width: 80px;
    white-space: nowrap;
    text-align: right;
    align-items: center;
    justify-content: end;
    color: $ign-color-opacity-middle;
    font-size: 11px;
    float: right;
  }

  .cli-is-typing {
    font-style: italic;
  }

  .small-icon {
    width: 12px !important;
    height: 12px !important;
    min-width: 12px !important;
    min-height: 12px !important;
    margin: 0 8px;
  }

  .done_all {
    color: $ign-green !important;

  }

  .done {
    color: $ign-blue !important;
  }
</style>
