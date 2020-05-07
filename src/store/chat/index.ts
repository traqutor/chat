import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { ChatState, chatInitial } from './types';
import { RootState } from '../types';

export const state: ChatState = chatInitial;

export const chat: Module<ChatState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
