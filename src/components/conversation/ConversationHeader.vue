<template>
  <div class="ign-header-wrapper">
    <conversation-list-item
      :conversation="conversation" />

    <div class="ign-secondary-wrapper">
      <v-btn icon>
        <v-icon>mdi-alert-circle-outline</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import ConversationListItem from './ConversationListItem.vue';

export default {
  name: 'ConversationHeader',
  props: ['conversation'],
  components: {
    'conversation-list-item': ConversationListItem,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .ign-header-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 82px;
    border-bottom: 1px solid $ign-secondary;
    margin-left: auto;
    margin-right: auto;
    max-width: $ign-readable-width;
  }

  .ign-secondary-wrapper {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

</style>
