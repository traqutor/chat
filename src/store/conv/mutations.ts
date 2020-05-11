import { MutationTree } from 'vuex';
import { ConversationsResponse, ConversationsState, Conversation } from '@/store/conv/types';

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

  setSelectedConversation: (state, payload: Conversation) => {
    state.selectedConversation = payload;
  },

  setConversationsLoading: (state, payload: boolean) => {
    state.isLoading = payload;
  },

};

export default mutations;
