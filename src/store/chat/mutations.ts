import { MutationTree } from 'vuex';
import { ChatState, Message } from '@/store/chat/types';

const mutations: MutationTree<ChatState> = {

  storeMessages: (state, payload) => {
    console.log('payload', payload);
    if (payload.hasErrors) {
      state.hasErrors = payload.hasErrors;
      state.errors = payload.errors;
    } else {
      state.value.pagedResults = payload.pagedResults.reverse().concat(state.value.pagedResults);
      state.value.currentPage = payload.currentPage;
      state.value.pageCount = payload.pageCount;
      state.value.pageSize = payload.pageSize;
      state.value.rowCount = payload.rowCount;
    }
  },

  emptyMessages: (state) => {
    state.hasErrors = false;
    state.errors = [];
    state.value.pagedResults = [];
    state.value.currentPage = 0;
    state.value.pageCount = 0;
    state.value.pageSize = 0;
    state.value.rowCount = 0;
  },

  postNewMessage: (state, payload) => {
    const message: Message = JSON.parse(payload);
    console.log('message', message);
    state.value.pagedResults.push(message);
  },

  setMessagesLoading: (state, payload: boolean) => {
    state.isLoading = payload;
  },

};

export default mutations;
