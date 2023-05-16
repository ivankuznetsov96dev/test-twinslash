import { createAction } from "@ngrx/store";
import { ActionTypes } from "../action-types";

export const loadConversationsAction = createAction(
  ActionTypes.LOAD_CONVERATIONS
);

export const loadConversationsSuccessAction = createAction(ActionTypes.LOAD_CONVERATIONS_SUCCESS);

export const loadConversationsFailureAction = createAction(ActionTypes.LOAD_CONVERATIONS_FAILURE);
