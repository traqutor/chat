<template>
  <div class="wrapper">
    <div class="actions-wrapper">
      <v-text-field
        solo
        background-color="#3d464f"
        dense
        label="Search"
        append-icon="mdi-magnify"
        v-model="searchText"
        @click:append="search"
        hide-details
      ></v-text-field>

      <v-btn @click="toggleConversationMode" small color="blue" class="ml-3" fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { VIEW_MODE } from '@/store/conv/types';

export default {
  name: 'SelectorHeader',

  data() {
    return {
      searchText: '',
    };
  },

  computed: {
    ...mapGetters({
      conversationViewMode: 'getConversationViewMode',
    }),
  },
  methods: {
    ...mapActions({
      setConversationMode: 'setConversationMode',
    }),
    search() {
      console.log('Search', this.searchText);
    },
    toggleConversationMode() {
      const mode = this.conversationViewMode === VIEW_MODE.CHAT
        ? VIEW_MODE.NEW : VIEW_MODE.CHAT;
      console.log('mode', mode);
      this.setConversationMode(mode);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/variables';

  .wrapper {
    flex: 1;
    height: 82px;
    border-bottom: 1px solid $ign-secondary;
  }

  .actions-wrapper {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

</style>
