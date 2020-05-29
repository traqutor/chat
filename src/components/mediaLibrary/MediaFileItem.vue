<template>
  <v-card
    color="primary"
    height="200"
    width="200"
    class="d-inline-block mx-auto pa-3">
    <div class="pa-3">
      <v-img
        src="../../assets/images/Meddy-App-Logo-2.png"></v-img>
    </div>
    <v-card-text class="text--primary align-self-center">
      <div>{{item.name}}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MediaLibraryFile',

  props: ['item'],
};
</script>
