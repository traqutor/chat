import { MutationTree } from 'vuex';
import { ChatState, Message } from '@/store/chat/types';

const mutations: MutationTree<ChatState> = {

  storeMessages: (state, payload) => {
    if (payload.hasErrors) {
      state.hasErrors = payload.hasErrors;
      state.errors = payload.errors;
    } else {
      state.value.pagedResults = payload.pagedResults.reverse();
      state.value.currentPage = payload.currentPage;
      state.value.pageCount = payload.pageCount;
      state.value.pagedResults = payload.pagedResults;
      state.value.pageSize = payload.pageSize;
      state.value.rowCount = payload.rowCount;
    }
  },

  postNewMessage: (state, payload) => {
    const message: Message = JSON.parse(payload);
    console.log('message', message);
    state.value.pagedResults.push(message);
  },

};

export default mutations;
