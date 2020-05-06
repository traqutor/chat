import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { ConversationsState, convInitial } from './types';
import { RootState } from '../types';

export const state: ConversationsState = convInitial;

export const conv: Module<ConversationsState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
