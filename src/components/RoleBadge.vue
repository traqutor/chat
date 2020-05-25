<template>
  <span class="ign-role-badge ml-2 text--disabled body-2 ">
    {{data}}
  </span>
</template>

<script>
export default {
  name: 'RoleBadge',

  props: ['data'],
};
</script>

<style scoped>

  .ign-role-badge {
    background-color: var(--v-secondary-base);
    border-radius: 4px;
    padding: 1px 4px;
  }

</style>
