import Vue from 'vue';
import { ActionTree } from 'vuex';
import axios from '../../axios-auth';
import { IAuthState, IAuthData, ILoginData } from './types';
import { RootState } from '../types';


const actions: ActionTree<IAuthState, RootState> = {
  login({ commit, dispatch }, authData: ILoginData): any {
    const loginFormData = new FormData();
    loginFormData.set('username', authData.userName);
    loginFormData.set('grant_type', 'password');
    loginFormData.set('password', authData.password);

    axios.post('/connect/token', loginFormData)
      .then((res: any) => {
        const payload: IAuthData = res.data;
        commit('authUser', payload);
        commit('setUser', payload.access_token);
        // dispatch('fetchConversations');
        Vue.prototype.startSignalR(payload.access_token);
      });
  },

  logout({ commit, state }): any {
    commit('authUser', {});
    // router.push('/').then(() => {
    //   return Vue.prototype.stopSignalR();
    // });
  },
};

export default actions;
