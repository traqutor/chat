<template>
  <section>
    <selector-conversations v-if="menuItems[0].isActive"></selector-conversations>
    <selector-people v-if="menuItems[1].isActive"></selector-people>
    <selector-groups v-if="menuItems[2].isActive"></selector-groups>
  </section>
</template>

<script>
import SelectorConversations from '@/components/selector/SelectorConversations.vue';
import SelectorPeople from '@/components/selector/SelectorPeople.vue';
import SelectorGroups from '@/components/selector/SelectorGroups.vue';

export default {
  name: 'SelectorTabs',
  props: ['menuItems'],
  components: {
    'selector-conversations': SelectorConversations,
    'selector-people': SelectorPeople,
    'selector-groups': SelectorGroups,
  },
};
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/variables';

  .selector-list-section {
    position: relative;
    margin-top: 14px;
    height: calc(100vh - #{$ign-header-height} - 94px);
  }

</style>
