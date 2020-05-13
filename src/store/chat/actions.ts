import { ActionTree } from 'vuex';
import axios from '@/axios';
import { ChatState } from '@/store/chat/types';
import { RootState } from '@/store/types';
import UserHelper from '@/helpers/UserHelper';

const actions: ActionTree<ChatState, RootState> = {

  fetchMessages: (
    { commit, rootState },
    { conversationId, page = 0, len = 20 },
  ) => {
    if (!rootState.auth.authData?.accessToken || !conversationId) {
      return;
    }

    commit('setMessagesLoading', true);
    axios.get(`/Messages?ConversationId=${conversationId}&Page=${page}&ItemsPerPage=${len}`,
      { headers: { Authorization: `Bearer ${rootState.auth.authData.accessToken}` } })
      .then((resData) => {
        commit('storeMessages', resData.data.value);
        commit('setMessagesLoading', false);
      })
      .catch((error) => {
        commit('setMessagesLoading', false);
        console.log(error);
      });
  },

  postNewMessageAction: ({ commit, rootState }, payload) => {
    if (rootState.conv.selectedConversation.conversationId === JSON.parse(payload).conversationId) {
      commit('postNewMessage', payload);
    }
  },

  setSelectedMessage: ({ commit }, payload) => {
    commit('setSelectedMessage', payload);
  },

  setMessagesChatViewMode: ({ commit }, payload) => {
    commit('setMessagesChatViewMode', payload);
  },

};

export default actions;
