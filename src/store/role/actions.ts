import { ActionTree } from 'vuex';
import axios from '@/axios';
import { RoleState } from '@/store/role/types';
import { RootState } from '@/store/types';

const actions: ActionTree<RoleState, RootState> = {

  fetchRoles: ({ commit, rootState }, text, page = 0, len = 10) => {
    if (!rootState.auth.authData?.accessToken ) {
      return;
    }
    axios.get(`/Roles/RolesAndGroups?SearchText=${text}&Page=${page}&ItemsPerPage=${len}`,
      { headers: { Authorization: `Bearer ${rootState.auth.authData.accessToken}` } })
      .then((resData) => {
        commit('storeRoles', resData.data.value);
      })
      .catch((error) => console.log(error));
  },

};

export default actions;
