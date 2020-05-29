<template>
  <div
    class="attachment-thumbnail"
    @mouseover="active = true"
    @mouseleave="active = false">

    <div
      @click.stop="onAttachmentOpen"
      class="thumbnail-shield"
      v-if="active">
      <v-icon class="thumbnail-icon">mdi-checkbox-multiple-blank-outline</v-icon>
    </div>

    <v-img v-if="srcUrl"
      class="white--text align-end"
      width="400px"
      height="200px"
      :src="srcUrl"
    >
    </v-img>
    <v-img v-else
      class="white--text align-end"
      width="400px"
      height="200px"
      src="../../assets/images/placeholder-image.png"
    >
    </v-img>
    <ChatAttachmentPreviewDialog
      :attachment-id="attachmentId"
      :is-dialog-open="showAttachmentPreview"
      @close="showAttachmentPreview = false"
    />
  </div>
</template>

<script>
import UploadFilesService from '@/services/UploadFilesService';
import ChatAttachmentPreviewDialog from '@/components/chat/ChatAttachmentPreviewDialog.vue';

export default {
  name: 'ChartAttachmentThumbnail',

  props: ['attachmentId'],

  data() {
    return {
      blob: null,
      srcUrl: '',
      progress: 0,
      active: false,
      showAttachmentPreview: false,
    };
  },

  components: {
    ChatAttachmentPreviewDialog,
  },

  created() {
    this.getSrcUrl();
  },

  methods: {

    onAttachmentOpen() {
      this.showAttachmentPreview = true;
    },

    getSrcUrl() {
      UploadFilesService
        .getMessageThumbnailAttachment(this.attachmentId, (event) => {
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
  .attachment-thumbnail {
    position: relative;
  }

  .thumbnail-shield {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 400px;
    height: 200px;
    background-color: rgba(106, 114, 115, 0.5);
    z-index: 9;
  }

  .thumbnail-icon {
    position: absolute;
    top: 100px;
    left: 200px;
  }

</style>
