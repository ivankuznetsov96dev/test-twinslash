import { Action, createReducer, on } from "@ngrx/store";
import { ConversationsStoreInterface } from "./types/app-store.interface";
import { loadConversationsAction, loadConversationsFailureAction, loadConversationsSuccessAction } from "./actions/load-conversations.action";
import { initConversationAction } from "./actions/init-conversation.action";

const initialState: ConversationsStoreInterface = {
  isLoading: false,
  conversations: []
};

const featureReducer = createReducer(
  initialState,
  on(loadConversationsAction, (state): ConversationsStoreInterface => ({
    ...state,
    isLoading: true
  })),
  on(loadConversationsSuccessAction, (state): ConversationsStoreInterface => ({
    ...state,
    isLoading: false
  })),
  on(loadConversationsFailureAction, (state): ConversationsStoreInterface => ({
    ...state,
    isLoading: false
  })),

  on(initConversationAction, (state, action) => ({
    ...state,
    isLoading: false,
    conversations: [...state.conversations, action.chat]
  }))
);

export function reducers(state: ConversationsStoreInterface, action: Action) {
  return featureReducer(state, action);
}
