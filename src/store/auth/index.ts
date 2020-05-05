import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { IAuthState } from './types';
import { RootState } from '../types';

export const state: IAuthState = {
  user: undefined,
  authData: undefined,
};

const namespaced = true;

export const auth: Module<IAuthState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
