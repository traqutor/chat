import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { RoleState, roleInitialState } from './types';
import { RootState } from '../types';

export const state: RoleState = roleInitialState;

export const role: Module<RoleState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
