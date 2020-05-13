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

export const CHAT_VIEW_MODE = {
  CHAT: 0,
  INFO: 1,
  WHISPER: 2,
  ADD_PEOPLE: 3,
};

export interface ChatState {
  isLoading: boolean;
  chatViewMode: number;
  selectedMessage: Message;
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

export const chatInitial: ChatState = {
  isLoading: false,
  chatViewMode: CHAT_VIEW_MODE.CHAT,
  selectedMessage: emptyMessage,
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
