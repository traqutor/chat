export interface Participant {
  id: string;
  code: string;
  roleName: string;
  isConversationCreator: boolean;
  userId: string;
  roleId: string;
  userName: string;
}

export interface Conversation {
  conversationId: string;
  topic: string;
  createdTimeOffset: string;
  unreadConversationMessagesCount: number;
  lastConversationMessageText: string;
  lastConversationMessageId: string;
  lastConversationMessageSenderUserId: string;
  lastConversationMessageSenderUserName: string;
  lastConversationMessageSenderRoleCode: string;
  lastConversationMessageSenderRoleName: string;
  lastConversationMessageSenderRoleId: string;
  lastActivityTimeOffset: string;
  deliveredLastMessageConversationMessagesCount: number;
  readLastMessageConversationMessagesCount: number;
  countOfLastMessageRecipients: number;
  conversationParticipantDtos: Participant[];
}

export interface ConversationsResponse {
  unreadCount: number;
  value: {
    pagedResults: Conversation[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
  };
  errors: [string];
  hasErrors: boolean;
}

export interface NewConversation{
  topic: string;
  roleIds: string[];
  groupsIds: string[];
  messageText: string;
  clientMessageId: number;
}

export interface ConversationsState {
  unreadCount: number;
  conversations: {
    pagedResults: Conversation[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
  };
  selectedConversation: Conversation;
  errors: [string];
  hasErrors: boolean;
  isChatMode: boolean;
  isInfoMode: boolean;
}

export const convInitial: ConversationsState = {
  unreadCount: 0,
  conversations: {
    currentPage: 0,
    pageCount: 0,
    pagedResults: [],
    pageSize: 0,
    rowCount: 0,
  },
  hasErrors: false,
  errors: [''],
  isChatMode: true,
  isInfoMode: false,
  selectedConversation: {
    conversationId: '',
    conversationParticipantDtos: [],
    countOfLastMessageRecipients: 0,
    createdTimeOffset: '',
    deliveredLastMessageConversationMessagesCount: 0,
    lastActivityTimeOffset: '',
    lastConversationMessageId: '',
    lastConversationMessageSenderRoleCode: '',
    lastConversationMessageSenderRoleId: '',
    lastConversationMessageSenderRoleName: '',
    lastConversationMessageSenderUserId: '',
    lastConversationMessageSenderUserName: '',
    lastConversationMessageText: '',
    readLastMessageConversationMessagesCount: 0,
    topic: '',
    unreadConversationMessagesCount: 0,
  },
};
