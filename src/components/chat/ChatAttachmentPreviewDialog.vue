<template>
  <v-dialog
    @click:outside="onAttachmentClose()"
    v-model="showDialog"
    scrollable>
    <v-card>
      <v-card-actions class="align-self-end">
        <v-btn icon @click.stop="onAttachmentClose">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      <perfect-scrollbar>
        <v-img v-if="srcUrl"
               class="white--text align-end"
               :src="srcUrl"
        >
        </v-img>
      </perfect-scrollbar>

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
