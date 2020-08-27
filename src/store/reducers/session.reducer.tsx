import * as ActionTypes from "../actions/types";
import { InitialState } from "@react-navigation/native";

import { UserAction, SessionModel } from "../actions/session.action";

type UserState = {
  data: SessionModel;
  error: string | undefined;
};

const initialState = {
  data: {} as SessionModel,
  error: undefined,
};

const session = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case ActionTypes.USER_SIGN_IN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };

    case ActionTypes.USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: {
          isLoading: false,
          error: null,
          // data: payload,
        },
      };

    case ActionTypes.USER_SIGN_IN_FAILURE:
      return {
        ...state,
        user: {
          isLoading: false,
          // error: payload,
        },
      };

    default:
      return { ...state };
  }
};

export default session;
