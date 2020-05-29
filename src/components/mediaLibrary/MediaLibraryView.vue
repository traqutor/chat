<template>
  <div class="d-flex flex-row" >

    <v-col cols="3" class="ma-3">

      <v-subheader>Folders</v-subheader>

      <perfect-scrollbar>
        <MediaLibraryStructure />
      </perfect-scrollbar>

    </v-col>

    <v-col cols="9" class="ma-3">

      <v-subheader>Content</v-subheader>

      <perfect-scrollbar>
        <MediaLibraryContent />
      </perfect-scrollbar>

    </v-col>
  </div>
</template>

<script>
import MediaLibraryStructure from '@/components/mediaLibrary/MediaLibraryStructure.vue';
import MediaLibraryContent from '@/components/mediaLibrary/MediaLibraryContent.vue';

export default {
  name: 'MediaLibraryView',

  components: {
    MediaLibraryStructure,
    MediaLibraryContent,
  },
};
</script>
