<template>
  <div class="about">
    <h3>This is a settings page</h3>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Settings',

  components: {
    'hello-world': HelloWorld,
  },
};
</script>
