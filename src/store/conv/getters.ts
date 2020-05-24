import { GetterTree } from 'vuex';
import { ConversationsState, Participant } from '@/store/conv/types';
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
  getUserById: (state) => (userId: string) => {
    let user = {};
    state.availableParticipants.forEach((participant) => {
      if (participant.userId === userId) {
        user = participant;
      }
    });
    return user;
  },

  getUserByRoleId: (state) => (roleId: string) => {
    let user = {};
    state.availableParticipants.forEach((participant) => {
      if (participant.roleId === roleId) {
        user = participant;
      }
    });
    return user;
  },

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
