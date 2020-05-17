import { GetterTree } from 'vuex';
import { ConversationsState } from '@/store/conv/types';
import { RootState } from '@/store/types';

const getters: GetterTree<ConversationsState, RootState> = {

  getConversations: (state) => state.conversations,
  getUnreadCount: (state) => state.unreadCount,
  getSelectedConversation: (state) => state.selectedConversation,
  getNewConversation: (state) => state.newConversation,
  getIsLoadingConversation: (state) => state.isLoading,
  getConversationViewMode: (state) => state.viewMode,
  getConversationAvailableParticipants: (state) => state.availableParticipants,
  getConversationSelectedParticipants: (state) => state.selectedParticipants,
  getUserAvatarUrlById: (state) => (userId: string) => {
    let url = '';
    state.availableAvatars.forEach((avatar) => {
      if (avatar.userId === userId) {
        url = avatar.avatarUrl;
      }
    });
    return url;
  },

};

export default getters;
