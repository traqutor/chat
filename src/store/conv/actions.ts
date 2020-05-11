import { ActionTree } from 'vuex';
import axios from '@/axios';
import { RootState } from '@/store/types';
import { ConversationsResponse, ConversationsState, Conversation } from '@/store/conv/types';
import UserHelper from '@/helpers/UserHelper';


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
        // find Id of the author of messages
        const { data } = resData;
        data.value.pagedResults = resData.data.value.pagedResults
          .map((conversation: Conversation) => UserHelper
            .getId(rootState.auth.user.userId, conversation));
        console.log('data', data);
        // if (rootState.conv.selectedConversation.conversationId === '') {
        //   commit('setSelectedConversation', data.value.pagedResults[0]);
        // }
        commit('storeConversations', data);
        commit('setConversationsLoading', false);
      })
      .catch((error) => {
        commit('setConversationsLoading', false);
        console.log(error);
      });
  },

  setSelectedConversationAction: ({ commit, dispatch }, payload) => {
    commit('emptyMessages');
    commit('setSelectedConversation', payload);
    dispatch('fetchMessages', { conversationId: payload.conversationId });
  },

};

export default actions;
