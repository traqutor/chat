import { GetterTree } from 'vuex';
import { AuthState, AuthData, AuthUser } from '@/store/auth/types';
import { RootState } from '@/store/types';

const getters: GetterTree<AuthState, RootState> = {

  authData(state): AuthData {
    return state.authData || {
      accessToken: '',
      expiresIn: 0,
      refreshToken: '',
      scope: '',
      tokenType: '',
    };
  },

  loggedUser(state): AuthUser {
    return state.user || {
      avatar: '',
      email: '',
      familyName: '',
      givenName: '',
      id: '',
      preferredUsername: '',
      role: [],
      roleName: '',
      scope: [],
      systemRole: [],
      userName: '',
    };
  },

};

export default getters;
