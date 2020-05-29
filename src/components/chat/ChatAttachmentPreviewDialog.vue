<template>
  <v-dialog
    @click:outside="onAttachmentClose()"
    v-model="showDialog"
    scrollable
    max-width="90%">

    <v-card>
      <v-card-actions>
        <v-btn @click.stop="onAttachmentClose">Close</v-btn>
      </v-card-actions>
      <v-divider></v-divider>
      <v-img v-if="srcUrl"
             class="white--text align-end"
             :src="srcUrl"
      >
      </v-img>

    </v-card>

  </v-dialog>
</template>

<script>
import UploadFilesService from '@/services/UploadFilesService';

export default {
  name: 'ChartAttachmentPreviewDialog',

  props: ['attachmentId', 'isDialogOpen'],

  data() {
    return {
      blob: null,
      srcUrl: '',
    };
  },

  created() {
    this.getSrcUrl();
  },

  computed: {
    showDialog() {
      return this.isDialogOpen;
    },
  },

  methods: {

    onAttachmentOpen() {
      console.log(this.attachmentId);
    },

    onAttachmentClose() {
      this.$emit('close');
    },

    getSrcUrl() {
      UploadFilesService
        .getMessageAttachment(this.attachmentId, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }).then((response) => {
          this.blob = new Blob([response.data]);
          this.srcUrl = window.URL.createObjectURL(this.blob);
        });
    },
  },

};
</script>

<style lang="scss" scoped>
</style>
