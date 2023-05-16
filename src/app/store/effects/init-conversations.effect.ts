import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadConversationsAction, loadConversationsFailureAction } from "../actions/load-conversations.action";
import { catchError, of, switchMap } from "rxjs";
import { initConversationAction } from "../actions/init-conversation.action";
import { TECHSUPPORT_CHAT } from "src/app/models/constants/chat.constant";

@Injectable()
export class LoadConversationsEffect {
  loadConversations$ = createEffect(() =>
  this.action$.pipe(
    ofType(loadConversationsAction),
    switchMap(() => of(initConversationAction({chat: {id: '0', name:'Tech Support', messages: TECHSUPPORT_CHAT}}))),
    catchError(() => of(loadConversationsFailureAction()))
  ),
);

  constructor(private action$: Actions){}
}
