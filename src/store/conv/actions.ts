import { ActionTree } from 'vuex';
import { instance } from '@/axios';
import { RootState } from '@/store/types';
import { ConversationsState, Conversation } from '@/store/conv/types';
import UserHelper from '@/helpers/UserHelper';
import { CHAT_VIEW_MODE } from '@/store/chat/types';


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

  fetchConversationById: ({ commit }, payload) => {
    instance.get(`/ConversationById?ConversationId=${payload}`)
      .then((dataResponse) => {
        commit('updateConversation', dataResponse.data.value);
      })
      .catch((error) => console.error(error));
  },

  getUsersAvatars: ({ commit, rootState }) => {
    rootState.conv.availableParticipants.forEach((participant) => {
      if (participant.userId === '00000000-0000-0000-0000-000000000000') return;
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
      .then((resData) => resData)
      .catch((error) => console.error(error));
  },

  postNewConversationAction: ({ commit, dispatch, rootState }, payload) => {
    const conversation = JSON.parse(payload);
    const { authorId } = { ...UserHelper.getId(rootState.auth.authUser.userId, conversation) };
    conversation.authorId = authorId;
    commit('postNewConversation', conversation);
    commit('emptyMessages');
    commit('setSelectedConversation', conversation);
    dispatch('fetchMessages', { conversationId: conversation.conversationId });
  },


  setSelectedConversationAction: ({ commit, dispatch }, payload) => {
    commit('setMessagesChatViewMode', CHAT_VIEW_MODE.CHAT);
    commit('emptyMessages');
    commit('setSelectedConversation', payload);
    dispatch('fetchMessages', { conversationId: payload.conversationId });
  },

  setConversationMode: ({ commit }, payload) => {
    commit('setConversationViewMode', payload);
  },

};

export default actions;
