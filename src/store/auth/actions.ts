import Vue from 'vue';
import { ActionTree } from 'vuex';
import { AuthState, AuthData, LoginData } from '@/store/auth/types';
import { RootState } from '@/store/types';
import axios from '@/axios-auth';
import { setJWT } from '@/axios';

const actions: ActionTree<AuthState, RootState> = {
  login({ commit, dispatch }, authData: LoginData): any {
    const loginFormData = new FormData();
    loginFormData.set('username', authData.userName);
    loginFormData.set('grant_type', 'password');
    loginFormData.set('password', authData.password);

    axios.post('/connect/token', loginFormData)
      .then((res: any) => {
        const payload: AuthData = {
          accessToken: res.data.access_token,
          expiresIn: res.data.expires_in,
          refreshToken: res.data.refresh_token,
          scope: res.data.scope,
          tokenType: res.data.token_type,
        };
        commit('authUser', payload);
        commit('setUser', payload.accessToken);
        setJWT(payload.accessToken);
        dispatch('fetchConversations');
        Vue.prototype.startSignalR(payload.accessToken);
      });
  },

  logout({ commit }): any {
    commit('logOut');
  },
};

export default actions;
