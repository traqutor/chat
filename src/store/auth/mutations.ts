import { MutationTree } from 'vuex';
import JwtHelper from '@/helpers/JwtHelper';
import {
  AuthState,
  AuthData,
  AuthUser,
  authInitial,
} from '@/store/auth/types';

const mutations: MutationTree<AuthState> = {
  authUser(state, authData: AuthData) {
    state.authData = authData;
  },

  setUser(state, token: string) {
    const res = JwtHelper.decodeToken(token);
    const userData: AuthUser = {
      userId: res.sub,
      email: res.email,
      familyName: res.family_name,
      givenName: res.given_name,
      userName: res.name,
      preferredUsername: res.preferred_username,
      avatar: '',
      role: res.role,
      scope: res.scope,
      systemRole: JSON.parse(res.SystemRolesJson),
      roleName: res.role[0],
    };
    state.authUser = userData;
  },

  logOut(state) {
    state.authData = {
      accessToken: '',
      expiresIn: 0,
      refreshToken: '',
      scope: '',
      tokenType: '',
    };
    state.authUser = {
      avatar: '',
      email: '',
      familyName: '',
      givenName: '',
      preferredUsername: '',
      role: [],
      roleName: '',
      scope: [],
      systemRole: [],
      userId: '',
      userName: '',
    };
  },
};

export default mutations;
