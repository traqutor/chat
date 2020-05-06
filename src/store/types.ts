import { AuthState } from '@/store/auth/types';
import { ConversationsState } from '@/store/conv/types';

export interface RootState {
  version: string,
  auth: AuthState,
  conv: ConversationsState,
}
