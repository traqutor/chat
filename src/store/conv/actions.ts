import { ActionTree } from 'vuex';
import axios from '@/axios';
import { ConversationsState } from '@/store/conv/types';
import { RootState } from '@/store/types';


const actions: ActionTree<ConversationsState, RootState> = {
  fetchConversations: (
    { commit, dispatch, rootState },
    page = 0,
    len = 20,
  ) => {
    commit('setConversationsLoading', true);

    axios.get(`/Conversations?Page=${page}&ItemsPerPage=${len}`,
      { headers: { Authorization: `Bearer ${rootState.auth.authData?.accessToken}` } })
      .then((resData) => {
        // if (rootState.conv.selectedConversation.conversationId === '') {
        //   commit('setSelectedConversation', resData.data.value.pagedResults[0]);
        // }
        commit('storeConversations', resData.data);
        commit('setConversationsLoading', false);
      })
      .catch((error) => {
        commit('setConversationsLoading', false);
        console.log(error);
      });
  },

  setSelectedConversationAction: ({ commit, dispatch }, payload) => {
    commit('setSelectedConversation', payload);
    dispatch('fetchMessages', { conversationId: payload.conversationId });
  },

};

export default actions;
