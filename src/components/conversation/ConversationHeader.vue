<template>
  <div class="ign-header-wrapper">
    <conversation-list-item
      :conversation="conversation" />

    <div class="ign-secondary-wrapper">

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>Add people</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-access-point</v-icon>
          </v-btn>
        </template>
        <span>Whisper to someone</span>
      </v-tooltip>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-alert-circle-outline</v-icon>
          </v-btn>
        </template>
        <span>Conversation info</span>
      </v-tooltip>

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
    height: $ign-header-height;
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
