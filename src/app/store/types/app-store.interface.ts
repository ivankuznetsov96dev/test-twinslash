import { IChatConversation } from "src/app/models/interfaces/chat.interface";

export interface AppStateInterface {
  conversationsStore: ConversationsStoreInterface;
}

export interface ConversationsStoreInterface {
  isLoading: boolean;
  conversations: IChatConversation[];
}
