export interface Message {
  messageId: string;
  conversationId: string;
  authorParticipantId: string;
  text: string;
  createdTimeOffset: string;
  clientMessageId: number;
  isWhisper: boolean;
  recipientsParticpantsIds: [];
  recipientIdListWhoReadMessage: [];
  messageAcknowledgeDtos: [
    {
      recipientParticipantId: string;
      status: number;
    }
  ];
  expectedAttachmentsCount: number;
  attachmentIds: [];
}

// messageId
// conversationId
// authorParticipantId
// text
// clientMessageId
// whisperParticipantIds
// requestAcknowledgeParticipantIds
// isWhisper
// whisperRoleIds
// requestAcknowledgeRoleIds
// attachmentIds

export interface ChatState {
  isLoading: boolean;
  value: {
    pagedResults: Message[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
  };
  errors: [];
  hasErrors: boolean;
}

export const chatInitial: ChatState = {
  isLoading: false,
  value: {
    pagedResults: [],
    currentPage: 0,
    pageCount: 0,
    pageSize: 0,
    rowCount: 0,
  },
  errors: [],
  hasErrors: false,
};

export const emptyMessage: Message = {
  messageId: '',
  conversationId: '',
  authorParticipantId: '',
  text: '',
  createdTimeOffset: '',
  clientMessageId: 0,
  isWhisper: false,
  recipientsParticpantsIds: [],
  recipientIdListWhoReadMessage: [],
  messageAcknowledgeDtos: [{ recipientParticipantId: '', status: 0 }],
  expectedAttachmentsCount: 0,
  attachmentIds: [],
};
