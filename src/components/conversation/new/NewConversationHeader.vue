<template>
  <div class="ign-header-wrapper">
    New Conversation Header
  </div>
</template>

<script>

export default {
  name: 'NewConversationHeader',
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/variables';

  .ign-header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: $ign-header-height;
    border-bottom: 1px solid $ign-secondary;
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }
</style>
