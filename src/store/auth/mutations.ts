import { MutationTree } from 'vuex';
import JwtHelper from '@/helpers/JwtHelper';
import { IAuthState, IAuthData, IAuthUser } from './types';

const mutations: MutationTree<IAuthState> = {
  authUser(state, authData: IAuthData) {
    console.log('authData', authData);
    state.authData = authData;
  },

  setUser(state, token: string) {
    console.log('token', token);
    const userData: IAuthUser = JwtHelper.decodeToken(token);
    state.user = userData;
  },

};

export default mutations;
