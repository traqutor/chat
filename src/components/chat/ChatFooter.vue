<template>

  <div>

    <div v-if="getWhisperToParticipants.length > 0" class="flex-wrap">
      <v-divider></v-divider>
      <span  class="caption">Whispering to:</span>
      <template v-for="(item, index) of getWhisperToParticipants">
        <v-chip
          :key="item.id"
          pill
          class="ma-2"
          color="primary"
          close
          @click:close="removeFromWhisperToParticipants(index)"
        >
          <v-avatar left>
            <v-img :src="getUserAvatarUrlById(item.userId)"></v-img>
          </v-avatar>
          {{ item.userName }}
        </v-chip>
      </template>
    </div>

    <div class="flex-wrap" v-show="selectedFiles.length > 0">
      <v-divider></v-divider>

      <input
        class="ign-file-input"
        type="file"
        ref="file"
        @change="selectFile"
        multiple
      />

      <span  class="caption">Attachments:</span>

      <template v-for="(item, index) of selectedFiles">
        <v-chip
          :key="index"
          class="ma-2"
          close
          color="teal"
          text-color="white"
          @click:close="removeFile(index)"
        >
          <v-avatar left>
            <v-icon>mdi-attachment</v-icon>
          </v-avatar>
          {{item.name}}
        </v-chip>
      </template>

    </div>

    <div class="chat-text-area-wrapper mt-2">

      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn
            class="ma-2"
            color="secondary"
            v-on="on"
            small
            fab
          >
            <v-icon >mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="onAddFileClick">
            <v-list-item-title>Add file</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Request Acknowledgement</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-textarea
        v-model="text"
        solo
        background-color="secondary"
        rows="1"
        name="text"
        label="Type a message..."
        @keydown.enter.prevent="onNewPost"
        height="56px"
      ></v-textarea>

      <v-btn
        :disabled="!text"
        @click="onNewPost"
        class="ma-2"
        fab
        small
        color="blue">
        <v-icon dark>mdi-send</v-icon>
      </v-btn>


    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { emptyMessage } from '@/store/chat/types';
import UploadFilesService from '@/services/UploadFilesService';

export default {
  name: 'ChatFooter',
  computed: {
    ...mapGetters({
      loggedUser: 'loggedUser',
      conversation: 'getSelectedConversation',
      getWhisperToParticipants: 'getWhisperToParticipants',
      getUserAvatarUrlById: 'getUserAvatarUrlById',
    }),
  },
  data() {
    return {
      text: '',
      selectedFiles: [],
      progress: 0,
      messageText: '',
      fileInfos: [],
    };
  },

  methods: {
    ...mapActions({
      postMessage: 'postNewMessageAction',
    }),

    ...mapMutations({
      removeFromWhisperToParticipants: 'removeFromWhisperToParticipants',
    }),

    onNewPost() {
      if (this.selectedFiles.length > 0) {
        this.postAttachmentMessage();
      } else {
        const newMessage = {
          ...emptyMessage,
          text: this.text,
          conversationId: this.conversation.conversationId,
          authorParticipantId: this.loggedUser.id,

        };
        this.$chatHub.sendMessage(newMessage);
      }

      this.text = null;
    },

    onAddFileClick() {
      this.$refs.file.click();
    },

    selectFile() {
      this.selectedFiles = this.selectedFiles.concat([...this.$refs.file.files]);
      console.log(this.selectedFiles[0]);
    },

    removeFile(index) {
      console.log(this.selectedFiles, index);
      this.selectedFiles.splice(index, 1);
    },

    postAttachmentMessage() {
      this.progress = 0;
      const currentFile = {
        file: this.selectedFiles[0],
        conversationId: this.conversation.conversationId,
        expectedAttachmentsCount: this.selectedFiles.length,
        whisperRolesIds: [],
        text: this.text,
        clientMessageId: 0,
        requestAcknowledgeParticipantsRolesIds: [],
      };

      UploadFilesService
        .sendAttachmentMessage(currentFile, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        })
        .then((response) => {
          console.log('responseData', response);
          this.text = '';
          this.selectedFiles = [];
        })
        .catch(() => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
        });
    },

  },
};
</script>

<style scoped lang="scss">
  @import "../../assets/styles/variables";

  .chat-text-area-wrapper {
    max-height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: $ign-readable-width;
  }

  .ign-file-input {
    left: 0;
    opacity: 0;
    position: absolute;
    max-width: 0;
    width: 0;
  }
</style>
