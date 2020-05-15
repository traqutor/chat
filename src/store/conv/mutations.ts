import { MutationTree } from 'vuex';
import {
  ConversationsResponse,
  ConversationsState,
  Conversation,
  Participant,
} from '@/store/conv/types';

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
        if (participants.find((prtcp) => prtcp.userId === user.userId)) {
          // do nothing
        } else {
          participants.push(user);
        }
      });
    });
    state.availableParticipants = [...state.availableParticipants.concat(participants)];
  },

  toggleParticipantSelection(state, payload: Participant) {
    const idx = state.selectedParticipants.findIndex((prt) => prt.id === payload.id);
    if (idx !== -1) {
      state.selectedParticipants.splice(idx, 1);
    } else {
      state.selectedParticipants.push(payload);
    }
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

};

export default mutations;
