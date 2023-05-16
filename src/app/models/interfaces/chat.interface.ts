export interface IChatConversation {
  id: string;
  name: string;
  messages: IChatMessage[];
}

export interface IChatMessage {
  id: string;
  text: string;
  timestamp: Date;
}
