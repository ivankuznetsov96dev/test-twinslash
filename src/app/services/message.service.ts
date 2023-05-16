import { Observable, of, filter, map } from 'rxjs';
import { Injectable } from "@angular/core";
import { IMessage } from '../models/interfaces/message.interface';
import { MESSAGES } from '../models/constants/messages.constant';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {}
  public searchMessages(keyword: string): Observable<IMessage[]> {
    return of(MESSAGES).pipe(map((messagesList: IMessage[]) =>
      messagesList.filter(data => data.text.toLowerCase().includes(keyword.toLowerCase()) && !!keyword.length)));
  }
}
