import { MutationTree } from 'vuex';
import JwtHelper from '@/helpers/JwtHelper';
import { AuthState, AuthData, AuthUser } from '@/store/auth/types';

const mutations: MutationTree<AuthState> = {
  authUser(state, authData: AuthData) {
    state.authData = authData;
  },

  setUser(state, token: string) {
    const res = JwtHelper.decodeToken(token);
    const userData: AuthUser = {
      id: res.sub,
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
    state.user = userData;
  },

  logOut(state) {
    state.authData = undefined;
    state.user = undefined;
  },
};

export default mutations;
