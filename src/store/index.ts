import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { authInitial } from '@/store/auth/types';
import { convInitial } from '@/store/conv/types';
import { chatInitial } from '@/store/chat/types';
import { roleInitialState } from '@/store/role/types';
import { taskInitialState } from '@/store/task/types';
import { auth } from '@/store/auth';
import { conv } from '@/store/conv';
import { chat } from '@/store/chat';
import { role } from '@/store/role';
import { task } from '@/store/task';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
    auth: { ...authInitial },
    conv: { ...convInitial },
    chat: { ...chatInitial },
    role: { ...roleInitialState },
    task: { ...taskInitialState },
  },
  modules: {
    auth,
    conv,
    chat,
    role,
    task,
  },
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
