import Vue from 'vue';
import { ActionTree } from 'vuex';
import { AuthState, AuthData, LoginData } from '@/store/auth/types';
import { RootState } from '@/store/types';
import axios from '@/axios-auth';
import { setAxiosJWT } from '@/axios';
import AuthHelper from '@/helpers/AuthHelper';


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
        localStorage.setItem('authData', JSON.stringify(payload));
        commit('authUser', payload);
        commit('setUser', payload.accessToken);
        setAxiosJWT(payload.accessToken);
        dispatch('fetchConversations');
        dispatch('fetchTasks');
        Vue.prototype.startSignalR(payload.accessToken);
      });
  },

  onAutoLogin({ commit, dispatch }) {
    const authData = AuthHelper.isAuthenticated();
    console.log('authData', authData);
    if (!authData) return;
    // todo expiration token check

    commit('authUser', authData);
    commit('setUser', authData.accessToken);
    setAxiosJWT(authData.accessToken);
    dispatch('fetchConversations');
    dispatch('fetchTasks');
    Vue.prototype.startSignalR(authData.accessToken);
  },

  logout({ commit }): any {
    localStorage.removeItem('authData');
    commit('logOut');
  },
};

export default actions;
