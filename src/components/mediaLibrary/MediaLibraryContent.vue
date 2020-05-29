<template>
  <div class="d-flex flex-wrap ma-3">

    <template v-for="item of content">
      <v-card color="secondary" class="pa-3 ma-2" :key="item.id">
        <MediaLibraryFolder v-if="item.type === 'folder'" :item="item" />
        <MediaLibraryFile v-else :item="item" />
      </v-card>
    </template>

  </div>
</template>

<script>
import MediaLibraryFile from '@/components/mediaLibrary/MediaFileItem.vue';
import MediaLibraryFolder from '@/components/mediaLibrary/MediaFolderItem.vue';

export default {
  name: 'MediaLibraryContent',

  data: () => ({
    content: [
      { id: 2, name: 'Calendar', type: 'folder' },
      { id: 3, name: 'Chrome', type: 'folder' },
      { id: 4, name: 'Webstorm', type: 'folder' },
      { id: 5, name: 'Picture1.png', type: 'file' },
      { id: 6, name: 'Picture2.png', type: 'file' },
      { id: 7, name: 'Picture3.png', type: 'file' },
    ],
  }),

  components: {
    MediaLibraryFolder,
    MediaLibraryFile,
  },

};
</script>
