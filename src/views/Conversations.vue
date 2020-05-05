<template>
  <div class="home">
    <v-btn small color="primary">
      <font-awesome-icon icon="comment" />Small Button</v-btn>
    <v-btn color="warning">
      <font-awesome-icon icon="user-secret" />Normal Button</v-btn>
    <v-btn color="error" large>
      <font-awesome-icon icon="user-secret" />Large Button</v-btn>
    <v-btn x-large color="success" >
      <font-awesome-icon icon="user-secret" />Extra large Button</v-btn>
    <v-btn x-small color="secondary" >
      <font-awesome-icon icon="user-secret" />
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Conversations',
  components: {},
};
</script>
