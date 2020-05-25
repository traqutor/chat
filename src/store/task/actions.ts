import { ActionTree } from 'vuex';
import { instance } from '@/axios';
import { Task, TaskCreate, TaskState } from '@/store/task/types';
import { RootState } from '@/store/types';

const actions: ActionTree<TaskState, RootState> = {

  fetchTasks: ({ commit, rootState }, text, page = 0, len = 10) => {
    if (!rootState.auth.authData?.accessToken) {
      return;
    }
    instance.get('/Tasks/GetAllTasks?Amount=100')
      .then((resData) => {
        commit('storeTasks', resData.data);
      })
      .catch((error) => console.log(error));
  },

  createNewTask({ commit }, task: TaskCreate) {
    instance.post('/Tasks/CreateTask', task)
      .then((resData) => {
        commit('addTask', resData.data.value);
      })
      .catch((error) => console.log(error));
  },

  updateTaskStatus({ commit }, task: Task) {
    instance.patch(`/Tasks/UpdateStatus?Id=${task.id}`, { status: task.status })
      .then((resData) => resData)
      .catch((error) => console.log(error));
  },


};

export default actions;
