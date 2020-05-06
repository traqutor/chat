import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from '@/store/types';
import { authInitial } from '@/store/auth/types';
import { convInitial } from '@/store/conv/types';
import { auth } from '@/store/auth';
import { conv } from '@/store/conv';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
    auth: authInitial,
    conv: convInitial,
  },
  modules: {
    auth,
    conv,
  },
  strict: process.env.NODE_ENV !== 'production',
};

export default new Vuex.Store<RootState>(store);
