import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { AuthState, authInitial } from './types';
import { RootState } from '../types';

export const state: AuthState = authInitial;

export const auth: Module<AuthState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
