import { ActionTree } from 'vuex';
import { instance } from '@/axios';
import { RootState } from '@/store/types';
import { ConversationsState, Conversation, Participant } from '@/store/conv/types';
import UserHelper from '@/helpers/UserHelper';


const actions: ActionTree<ConversationsState, RootState> = {

  fetchConversations: (
    { commit, dispatch, rootState },
    page = 0,
    len = 20,
  ) => {
    commit('setConversationsLoading', true);

    instance.get(`/Conversations?Page=${page}&ItemsPerPage=${len}`)
      .then((resData) => {
        // find Id of the author of messages
        const { data } = resData;
        data.value.pagedResults = resData.data.value.pagedResults
          .map((conversation: Conversation) => UserHelper
            .getId(rootState.auth.authUser.userId, conversation));
        // if (rootState.conv.selectedConversation.conversationId === '') {
        //   commit('setSelectedConversation', data.value.pagedResults[0]);
        // }
        commit('storeConversations', data);
        commit('selectAvailableParticipants', data);
        commit('setConversationsLoading', false);
        dispatch('getUsersAvatars');
      })
      .catch((error) => {
        commit('setConversationsLoading', false);
        console.log(error);
      });
  },

  getUsersAvatars: ({ commit, dispatch, rootState }) => {
    rootState.conv.availableParticipants.forEach((participant) => {
      instance.get(`/Users/GetAvatar?UserId=${participant.userId}`,
        {
          responseType: 'blob',
          headers: { accept: 'application/octet-stream' },
        })
        .then((response) => {
          const blob = new Blob([response.data]);
          const avatarUrl = window.URL.createObjectURL(blob);
          commit('setAvailableParticipantAvatar', {
            userId: participant.userId,
            avatarUrl,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  },

  createNewConversation: ({ rootState }) => {
    const { newConversation } = rootState.conv;
    instance.post('/Conversations',
      { ...newConversation })
      .then((resData) => {
        console.log('Response new conversation:', resData);
      });
  },

  setSelectedConversationAction: ({ commit, dispatch }, payload) => {
    commit('emptyMessages');
    commit('setSelectedConversation', payload);
    dispatch('fetchMessages', { conversationId: payload.conversationId });
  },

  setConversationMode: ({ commit }, payload) => {
    commit('setConversationViewMode', payload);
  },

};

export default actions;
