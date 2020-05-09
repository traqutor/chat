import { GetterTree } from 'vuex';
import { ChatState } from '@/store/chat/types';
import { RootState } from '@/store/types';

const getters: GetterTree<ChatState, RootState> = {

  getMessages: (state) => state.value.pagedResults,
  getMessagesIsLoading: (state) => state.isLoading,
  getMessagesCurrentPage: (state) => state.value.currentPage,
  getMessagesPageCount: (state) => state.value.pageCount,

};

export default getters;
