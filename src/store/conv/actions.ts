import { ActionTree } from 'vuex';
import axios from '@/axios';
import { ConversationsState } from '@/store/conv/types';
import { RootState } from '@/store/types';


const actions: ActionTree<ConversationsState, RootState> = {

  fetchConversations: ({ commit, rootState }, page = 0, len = 10) => {
    console.log('rootState', rootState);
    axios.get(`/Conversations?Page=${page}&ItemsPerPage=${len}`,
      { headers: { Authorization: `Bearer ${rootState.auth.authData?.accessToken}` } })
      .then((resData) => {
        commit('storeConversations', resData.data);
      })
      .catch((error) => console.log(error));
  },

  setSelectedConversationAction: ({ commit, dispatch }, payload) => {
    commit('setSelectedConversation', payload);
    // dispatch('fetchMessages', payload.conversationId);
  },

};

export default actions;
