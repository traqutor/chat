import { AuthState } from '@/store/auth/types';
import { ConversationsState } from '@/store/conv/types';
import { ChatState } from '@/store/chat/types';
import { RoleState } from '@/store/role/types';

export interface RootState {
  version: string,
  auth: AuthState,
  conv: ConversationsState,
  chat: ChatState
  role: RoleState
}
