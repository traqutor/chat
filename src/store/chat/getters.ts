import { GetterTree } from 'vuex';
import { ChatState } from '@/store/chat/types';
import { RootState } from '@/store/types';

const getters: GetterTree<ChatState, RootState> = {

  allMessages: (state) => state.value.pagedResults,

};

export default getters;
