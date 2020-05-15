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
  authorId: string;
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

export const VIEW_MODE = {
  CHAT: 0,
  NEW: 1,
};

export interface ConversationsState {
  isLoading: boolean;
  unreadCount: number;
  conversations: {
    pagedResults: Conversation[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
  };
  selectedConversation: Conversation;
  availableParticipants: Participant[];
  selectedParticipants: Participant[];
  newConversation: NewConversation;
  errors: [string];
  hasErrors: boolean;
  viewMode: number;
}


export const convInitial: ConversationsState = {
  isLoading: false,
  viewMode: VIEW_MODE.CHAT,
  unreadCount: 0,
  conversations: {
    currentPage: 0,
    pageCount: 0,
    pagedResults: [],
    pageSize: 0,
    rowCount: 0,
  },
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
    authorId: '',
  },
  newConversation: {
    topic: '',
    roleIds: [],
    groupsIds: [],
    messageText: '',
    clientMessageId: 0,
  },
  availableParticipants: [],
  selectedParticipants: [],
  hasErrors: false,
  errors: [''],
};
