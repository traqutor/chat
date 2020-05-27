import { MutationTree } from 'vuex';
import { TaskState, Task, TaskStateColumn } from '@/store/task/types';

const mutations: MutationTree<TaskState> = {

  storeTasks: (state, payload) => {
    if (payload && !payload.hasErrors) {
      state.data.columns = state.data.columns.map((column) => {
        const tasks: Task[] = payload.value.results
          .filter((task: Task) => task.status === column.id);
        const col: TaskStateColumn = column;
        col.tasks = tasks;
        return col;
      });
    }
  },

  addTask: (state, task: Task) => {
    const tsk = { ...task };
    tsk.status = 0;
    tsk.order = 0;
    tsk.referenceNumber = 1;
    const { data } = { ...state };
    const idx = data.columns
      .findIndex((column) => column.id === tsk.status);
    if (idx !== -1) {
      state.data.columns[idx].tasks.splice(0, 0, tsk);
    }
  },

  removeTask: (state, payload) => {
    state.data.columns[payload.columnIndex].tasks.splice(payload.taskIndex, 1);
  },

  updateTask: (state, payload) => {
    state.data.columns[payload.columnIndex].tasks.splice(payload.taskIndex, 0, payload.task);
  },

};

export default mutations;
