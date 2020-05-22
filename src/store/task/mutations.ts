import { MutationTree } from 'vuex';
import { TaskState, Task } from '@/store/task/types';

const mutations: MutationTree<TaskState> = {

  storeTasks: (state, payload: TaskState) => {
    if (payload) {
      state.data.columns = payload.data.columns;
    }
  },

  addTask: (state, task: Task) => {
    const { data } = { ...state };
    const idx = data.columns
      .findIndex((column) => column.id === task.status);
    if (idx) {
      data.columns[idx].tasks.splice(0, 0, task);
    }
    state.data = data;
  },

  updateTask: (state, task: Task) => {
    const { data } = { ...state };

    data.columns.map((column) => {
      const i = column.tasks.findIndex((item) => item.id === task.id);
      if (i !== -1) {
        column.tasks.splice(i, 1);
      }
      return column;
    });

    const idx = data.columns
      .findIndex((column) => column.id === task.status);
    if (idx) {
      data.columns[idx].tasks.splice(task.order, 0, task);
    }

    state.data = data;
  },

};

export default mutations;
