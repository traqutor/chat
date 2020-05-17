import { MutationTree } from 'vuex';
import {
  ConversationsResponse,
  ConversationsState,
  Conversation,
  Participant,
  ParticipantAvatar,
} from '@/store/conv/types';
import JwtHelper from '@/helpers/JwtHelper';

const mutations: MutationTree<ConversationsState> = {

  storeConversations: (state, payload: ConversationsResponse) => {
    if (payload.hasErrors) {
      state.hasErrors = payload.hasErrors;
      state.errors = payload.errors;
    } else {
      state.unreadCount = payload.unreadCount;
      state.conversations.currentPage = payload.value.currentPage;
      state.conversations.pageCount = payload.value.pageCount;
      state.conversations.pagedResults = state.conversations.pagedResults
        .concat(payload.value.pagedResults);
      state.conversations.pageSize = payload.value.pageSize;
      state.conversations.rowCount = payload.value.rowCount;
    }
  },

  // collect all users from
  selectAvailableParticipants(state, payload: ConversationsResponse) {
    const participants: Participant[] = [...state.availableParticipants];
    payload.value.pagedResults.forEach((conversation) => {
      conversation.conversationParticipantDtos.forEach((user) => {
        const tmp: Participant = { ...user };
        const idx = participants.findIndex((part) => part.userId === user.userId);
        if (idx === -1) {
          participants.push(tmp);
        }
      });
    });
    state.availableParticipants = [...state.availableParticipants.concat(participants)];
  },

  setAvailableParticipantAvatar(state, payload) {
    const participantsAvatars: ParticipantAvatar[] = [...state.availableAvatars];
    const idx = participantsAvatars
      .findIndex((user) => user.userId === payload.userId);
    if (idx === -1) {
      participantsAvatars.push(payload);
    }
    state.availableAvatars = [...participantsAvatars];
  },

  toggleParticipantSelection(state, payload: Participant) {
    const idx = state.selectedParticipants.findIndex((prt) => prt.id === payload.id);
    if (idx !== -1) {
      const i = state.newConversation.roleIds.findIndex((role) => role === payload.roleId);
      if (i !== -1) {
        state.newConversation.roleIds.splice(i, 1);
      }
      state.selectedParticipants.splice(idx, 1);
    } else {
      state.selectedParticipants.push(payload);
      state.newConversation.roleIds.push(payload.roleId);
    }
  },

  postNewConversation: (state, payload: Conversation) => {
    state.conversations.pagedResults.splice(0, 0, payload);
  },

  setSelectedConversation: (state, payload: Conversation) => {
    state.selectedConversation = payload;
  },

  setConversationsLoading: (state, payload: boolean) => {
    state.isLoading = payload;
  },

  setConversationViewMode: (state, payload: number) => {
    state.viewMode = payload;
  },

  setNewConversationClientMessageId: (state, token: string) => {
    const res = JwtHelper.decodeToken(token);
    state.newConversation.clientMessageId = res.sub;
  },

  setNewConversationTopic: (state, payload: string) => {
    state.newConversation.topic = payload;
  },

  setNewConversationMessageText: (state, payload: string) => {
    state.newConversation.messageText = payload;
  },

  setNewConversationRoleIds: (state, payload: string[]) => {
    state.newConversation.roleIds = payload;
  },

  setNewConversationGroupIds: (state, payload: string[]) => {
    state.newConversation.roleIds = payload;
  },

  resetNewConversation: (state) => {
    const { newConversation } = state;
    state.newConversation = {
      ...newConversation,
      roleIds: [],
      messageText: '',
      topic: '',
      groupsIds: [],
    };
  },

};

export default mutations;
