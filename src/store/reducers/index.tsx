import { combineReducers } from "redux";

import { default as session } from "./session.reducer";

const rootReducer = combineReducers({
  session,
});

export default rootReducer;
