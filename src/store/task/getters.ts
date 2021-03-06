import { GetterTree } from 'vuex';
import { TaskState } from '@/store/task/types';
import { RootState } from '@/store/types';

const getters: GetterTree<TaskState, RootState> = {

  getAllColumns: (state) => state.data.columns,
  getAllTasks: (state) => state.data.tasks,

};

export default getters;
