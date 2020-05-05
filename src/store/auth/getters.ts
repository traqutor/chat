import { GetterTree } from 'vuex';
import { IAuthState, IAuthUser } from './types';
import { RootState } from '../types';

const getters: GetterTree<IAuthState, RootState> = {

  loggedUser(state): IAuthUser {
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
