<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px">
      <template v-slot:activator="{ on }">

        <v-btn fab color="primary" x-small v-on="on">
          <v-icon color="grey lighten-1">mdi-plus</v-icon>
        </v-btn>

      </template>
      <v-card color="secondary">
        <v-card-title>
          <span class="headline">Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>

            <v-text-field label="Title" required></v-text-field>

            <v-text-field label="Note" required></v-text-field>

            <v-select
              :items="[1, 2, 3, 4, 5]"
              label="Priority"
              required
            ></v-select>

            <v-autocomplete
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball']"
              label="Participants"
              multiple
            ></v-autocomplete>

          </v-container>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,

  }),
};
</script>
