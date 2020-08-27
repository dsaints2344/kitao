import * as ActionTypes from "./types";

// Sign In the user ====================================================================================================

/**
  * @description Log In the user
  * @param data {
      email: the user email,
      password: the password,
    }
  * @returns The user's sessión token
*/

export interface SessionModel {
  firstName: string;
  lastname: string;
}

export interface signInRequest {
  readonly type: ActionTypes.USER_SIGN_IN_REQUEST;
  payload: null;
}

export interface signInFailure {
  readonly type: ActionTypes.USER_SIGN_IN_FAILURE;
  payload: null;
}

export interface signInSuccess {
  readonly type: ActionTypes.USER_SIGN_IN_SUCCESS;
  payload: null;
}

export type UserAction = signInRequest | signInFailure | signInSuccess;

export const signIn = (data: signIn) => async (
  dispatch: any,
  getState: any
) => {
  dispatch({ type: ActionTypes.USER_SIGN_IN_REQUEST });

  console.log("data", data);

  try {
    // let request = await fetch(API.login, { ...setApiHeaders(requestMethod.post), body: JSON.stringify(data) });
    //   let request = await SessionService.signIn(data)
    //   if (request.status === 200 || request.status === 201) {
    //     dispatch({
    //       type: ActionTypes.USER_SIGN_IN_SUCCESS,
    //       payload: request.data,
    //     });
    //   } else {
    //     dispatch({
    //       type: ActionTypes.USER_SIGN_IN_FAILURE,
    //       payload: requestData.message,
    //     });
    //   }
  } catch (error) {
    if (error.response.status === 401) {
      dispatch({
        type: ActionTypes.USER_SIGN_IN_FAILURE,
        payload: "Invalid email or password",
      });
    } else {
      dispatch({
        type: ActionTypes.USER_SIGN_IN_FAILURE,
        payload: "Error while signing in, please try again",
      });
    }
  }
};
