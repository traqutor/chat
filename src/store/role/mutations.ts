import { MutationTree } from 'vuex';
import { RoleState } from '@/store/role/types';

const mutations: MutationTree<RoleState> = {

  storeRoles: (state, payload: RoleState) => {
    if (payload.hasErrors) {
      state.hasErrors = payload.hasErrors;
      state.errors = payload.errors;
    } else {
      state.value.pageCount = payload.value.pageCount;
      state.value.pagedResults = payload.value.pagedResults;
      state.value.pageSize = payload.value.pageSize;
      state.value.rowCount = payload.value.rowCount;
    }
  },


};

export default mutations;
