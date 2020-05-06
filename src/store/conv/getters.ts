import { GetterTree } from 'vuex';
import { ConversationsState } from '@/store/conv/types';
import { RootState } from '@/store/types';

const getters: GetterTree<ConversationsState, RootState> = {

  getAllConversations: (state) => state.conversations.pagedResults,

  getSelectedConversation: (state) => state.selectedConversation,

};

export default getters;
