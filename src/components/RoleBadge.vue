<template>
  <span class="ign-role-badge">
    {{data}}
  </span>
</template>

<script>
export default {
  name: 'RoleBadge',

  props: ['data'],
};
</script>

<style scoped lang="scss">
  @import "src/assets/styles/variables";

  .ign-role-badge {
    height: 22px;
    font-size: 13px;
    font-weight: 400;
    background-color: $ign-secondary-dark;
    border-radius: 4px;
    color: $ign-color-opacity-middle;
    cursor: pointer;
    padding: 0 8px;
    margin: 0 0 4px 8px;
    text-align: center;
    white-space: nowrap;
  }
</style>
