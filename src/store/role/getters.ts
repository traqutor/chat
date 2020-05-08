import { GetterTree } from 'vuex';
import { RoleState } from '@/store/role/types';
import { RootState } from '@/store/types';

const getters: GetterTree<RoleState, RootState> = {

  getAllRoles: (state) => state.value.pagedResults,

};

export default getters;
