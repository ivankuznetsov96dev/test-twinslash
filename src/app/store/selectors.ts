import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConversationsStoreInterface } from "./types/app-store.interface";

export const storeFeatureSelector = createFeatureSelector<ConversationsStoreInterface>('conversationsStore');

export const isLoggedInSelector = createSelector(
  storeFeatureSelector,
  (storeState: ConversationsStoreInterface) => storeState.isLoading,
);

export const getConversations = createSelector(
  storeFeatureSelector,
  (storeState: ConversationsStoreInterface) => storeState.conversations
);

// export const getChatsInfo = createSelector(
//   storeFeatureSelector,
//   (storeState: ConversationsStoreInterface) => storeState.conversations.find(conversations => conversations)
// );
