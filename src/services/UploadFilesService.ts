import { instance } from '@/axios';

// eslint class-methods-use-this: "disabled"
class UploadFilesService {
  sendAttachmentMessage(
    form: any,
    onUploadProgress: any,
  ) {
    const formData = new FormData();

    formData.append('File', form.file);
    formData.append('ConversationId', form.conversationId);
    formData.append('ExpectedAttachmentsCount', JSON.stringify(form.expectedAttachmentsCount));
    formData.append('WhisperRolesIds', form.whisperRolesIds);
    formData.append('Text', form.text);
    formData.append('ClientMessageId', JSON.stringify(form.clientMessageId));
    formData.append('RequestAcknowledgeParticipantsRolesIds',
      form.requestAcknowledgeParticipantsRolesIds);

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

  getMessageAttachment(attachmentId: string, onUploadProgress: any) {
    return instance.get(`/Messages/GetMessageAttachment?AttachmentId=${attachmentId}`,
      {
        responseType: 'blob',
        headers: { accept: 'application/octet-stream' },
        onUploadProgress,
      });
  }

  getMessageThumbnailAttachment(attachmentId: string, onUploadProgress: any) {
    return instance.get(`/Messages/GetMessageThumbnailImage?AttachmentId=${attachmentId}`,
      {
        responseType: 'blob',
        headers: { accept: 'application/octet-stream' },
        onUploadProgress,
      });
  }
}

export default new UploadFilesService();
