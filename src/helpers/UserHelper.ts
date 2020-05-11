import { Conversation } from '@/store/conv/types';

class UserHelper {
  static getId(userId: string, conversation: Conversation): Conversation {
    const item = { ...conversation };
    conversation.conversationParticipantDtos.forEach((participant) => {
      if (participant.userId === userId) {
        item.authorId = participant.id;
      }
    });

    return item;
  }
}

export default UserHelper;
