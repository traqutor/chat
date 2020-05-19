import { instance } from '@/axios';

// eslint class-methods-use-this: "disabled"
class UploadFilesService {
  sendAttachmentMessage(
    file: any,
    conversationId: string,
    expectedAttachmentsCount: number,
    whisperRolesIds: string[],
    text: string,
    clientMessageId: number,
    requestAcknowledgeParticipantsRolesIds: string[],
    onUploadProgress: any,
  ) {
    const formData = new FormData();

    formData.append('File', file);
    formData.append('ConversationId', conversationId);
    formData.append('ExpectedAttachmentsCount', JSON.stringify(expectedAttachmentsCount));
    formData.append('WhisperRolesIds', JSON.stringify(whisperRolesIds));
    formData.append('Text', text);
    formData.append('ClientMessageId', JSON.stringify(clientMessageId));
    formData.append('RequestAcknowledgeParticipantsRolesIds',
      JSON.stringify(requestAcknowledgeParticipantsRolesIds));

    return instance.post('/Messages/SendAttachmentMessage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    });
  }

  sendExtraAttachmentToMessage(file: any, messageId: string, onUploadProgress: any) {
    const formData = new FormData();
    formData.append('File', file);
    formData.append('MessageId', messageId);
    return instance.post('/Messages/SendExtraAttachmentToMessage',
      formData,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress,
      });
  }
}

export default new UploadFilesService();
