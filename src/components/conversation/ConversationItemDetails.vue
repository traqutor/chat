<template>
  <div class="ign-item-info-row">

    <div class="cid-text-wrap">
      {{conversation.lastConversationMessageText}}
    </div>

  </div>
</template>

<script>
export default {
  name: 'ConversationDetails',
  props: ['conversation'],
};
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/variables";

  .cid-text-wrap {
    flex: 1;
    color: $ign-color-opacity-more;
    background-color: pink;
    margin-top: 4px;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
  }

</style>
