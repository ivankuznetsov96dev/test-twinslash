import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../action-types";
import { IChatConversation } from "src/app/models/interfaces/chat.interface";

export const initConversationAction = createAction(
  ActionTypes.INIT_CONVERATION,
  props<{ chat: IChatConversation}>(),
);

export const initConversationSuccessAction = createAction(ActionTypes.INIT_CONVERATION_SUCCESS);

export const initConversationFailureAction = createAction(ActionTypes.INIT_CONVERATION_FAILURE);
