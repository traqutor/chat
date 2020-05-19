import { ActionTree } from 'vuex';
import { instance } from '@/axios';
import { ChatState } from '@/store/chat/types';
import { RootState } from '@/store/types';

const actions: ActionTree<ChatState, RootState> = {

  fetchMessages: (
    { commit, rootState },
    { conversationId, page = 0, len = 20 },
  ) => {
    commit('setMessagesLoading', true);
    instance.get(`/Messages?ConversationId=${conversationId}&Page=${page}&ItemsPerPage=${len}`)
      .then((resData) => {
        commit('storeMessages', resData.data.value);
        commit('setMessagesLoading', false);
      })
      .catch((error) => {
        commit('setMessagesLoading', false);
        console.log(error);
      });
  },

  postNewMessageAction: ({ commit, dispatch, rootState }, payload) => {
    const { conversationId } = JSON.parse(payload);
    if (rootState.conv.selectedConversation.conversationId === conversationId) {
      commit('postNewMessage', payload);
    } else {
      dispatch('fetchConversationById', conversationId);
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
