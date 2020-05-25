<template>
  <div class="content">

    <v-col class="ma-3" cols="4">

      <div>
        <v-text-field
          solo
          dense
          label="Search"
          background-color="secondary"
          append-icon="mdi-magnify"
          v-model="searchText"
          @click:append="search"
          hide-details
        ></v-text-field>

        <div class="mt-1 space-between">
          <v-btn text small >Clinical</v-btn>
          <v-btn text small >Maintenance</v-btn>
          <v-btn text small >Porter</v-btn>
        </div>

      </div>

    </v-col>

  </div>
</template>
<script>
export default {
  name: 'RaiseTask',

  data() {
    return {
      searchText: '',
    };
  },

  methods: {
    search() {
      console.log('search');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
