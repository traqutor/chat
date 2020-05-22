import { Module } from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import { TaskState, taskInitialState } from './types';
import { RootState } from '../types';

export const state: TaskState = taskInitialState;

export const task: Module<TaskState, RootState> = {
  state,
  getters,
  actions,
  mutations,
};
