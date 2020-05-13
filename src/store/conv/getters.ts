import { GetterTree } from 'vuex';
import { ConversationsState } from '@/store/conv/types';
import { RootState } from '@/store/types';

const getters: GetterTree<ConversationsState, RootState> = {

  getConversations: (state) => state.conversations,
  getUnreadCount: (state) => state.unreadCount,
  getSelectedConversation: (state) => state.selectedConversation,
  getIsLoadingConversation: (state) => state.isLoading,
  getConversationViewMode: (state) => state.viewMode,

};

export default getters;
