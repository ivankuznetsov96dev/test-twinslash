import { IChatMessage } from "../interfaces/chat.interface";
import * as uuid from 'uuid';

export const TECHSUPPORT_CHAT: IChatMessage[] = [
  {
    id: uuid.v4(),
    text: 'Добро пожаловать МАСТЕР',
    timestamp: new Date(),
  },
  {
    id: uuid.v4(),
    text: 'Это уже второе сообщение',
    timestamp: new Date(),
  },
  {
    id: uuid.v4(),
    text: 'Крик души. 22:41',
    timestamp: new Date(),
  },
  {
    id: uuid.v4(),
    text: 'Пора спать!',
    timestamp: new Date(),
  }
]
