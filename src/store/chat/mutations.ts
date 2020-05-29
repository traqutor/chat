import { MutationTree } from 'vuex';
import { ChatState, Message } from '@/store/chat/types';
import { Participant } from '@/store/conv/types';

const mutations: MutationTree<ChatState> = {

  storeMessages: (state, payload) => {
    if (payload.hasErrors) {
      state.hasErrors = payload.hasErrors;
      state.errors = payload.errors;
    } else {
      state.value.pagedResults = payload.pagedResults.reverse().concat(state.value.pagedResults);
      state.value.currentPage = payload.currentPage;
      state.value.pageCount = payload.pageCount;
      state.value.pageSize = payload.pageSize;
      state.value.rowCount = payload.rowCount;
    }
  },

  emptyMessages: (state) => {
    state.hasErrors = false;
    state.errors = [];
    state.value.pagedResults = [];
    state.value.currentPage = 0;
    state.value.pageCount = 0;
    state.value.pageSize = 0;
    state.value.rowCount = 0;
  },

  postNewMessage: (state, payload) => {
    const message: Message = JSON.parse(payload);
    state.value.pagedResults.push(message);
  },

  setMessagesLoading: (state, payload: boolean) => {
    state.isLoading = payload;
  },

  setSelectedMessage: (state, payload: Message) => {
    state.selectedMessage = payload;
  },

  setMessagesChatViewMode: (state, payload: number) => {
    state.chatViewMode = payload;
  },

  setWhisperToParticipants: (state, payload: Participant[]) => {
    state.whisperToParticipants = [...payload];
  },

  addToWhisperToParticipants: (state, payload: Participant) => {
    state.whisperToParticipants = [...state.whisperToParticipants, { ...payload }];
  },

  removeFromWhisperToParticipants: (state, index: number) => {
    state.whisperToParticipants.splice(index, 1);
  },

  emptyWhisperToParticipants: (state) => {
    state.whisperToParticipants = [];
  },
};

export default mutations;
