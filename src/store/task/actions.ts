import { ActionTree } from 'vuex';
import { instance } from '@/axios';
import { TaskState } from '@/store/task/types';
import { RootState } from '@/store/types';

const actions: ActionTree<TaskState, RootState> = {

  fetchTasks: ({ commit, rootState }, text, page = 0, len = 10) => {
    if (!rootState.auth.authData?.accessToken) {
      return;
    }
    instance.get('/Tasks')
      .then((resData) => {
        commit('storeTasks', resData.data);
      })
      .catch((error) => console.log(error));
  },

};

export default actions;
