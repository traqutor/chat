<template>
  <div>
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
  </div>
</template>

<script>
import UploadFilesService from '@/services/UploadFilesService';

export default {
  name: 'ChartAttachmentThumbnail',

  props: ['attachmentId'],

  data() {
    return {
      blob: null,
      srcUrl: '',
      progress: 0,
    };
  },

  created() {
    this.getSrcUrl();
  },

  methods: {
    getSrcUrl() {
      UploadFilesService
        .getMessageThumbnailAttachment(this.attachmentId, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }).then((response) => {
          this.blob = new Blob([response.data]);
          this.srcUrl = window.URL.createObjectURL(this.blob);
          console.log('srcUrl', this.srcUrl);
        });
    },
  },

};
</script>

<style lang="scss" scoped>
  .attachment-thumbnail {

  }
  .rotate90 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
</style>
