import { MutationTree } from 'vuex';
import JwtHelper from '@/helpers/JwtHelper';
import { AuthState, AuthData, AuthUser } from '@/store/auth/types';

const mutations: MutationTree<AuthState> = {
  authUser(state, authData: AuthData) {
    state.authData = authData;
  },

  setUser(state, token: string) {
    const userData: AuthUser = JwtHelper.decodeToken(token);
    state.user = userData;
  },

};

export default mutations;
