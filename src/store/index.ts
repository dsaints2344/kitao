import AsyncStorage from "@react-native-community/async-storage";

import { createStore, compose, applyMiddleware, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

// Import the root reducer

import rootReducer from "./reducers";

// Middleware: Redux Persist Config

const persistConfig = {
  // Root?

  key: "root",

  // Storage Method (React Native)

  storage: AsyncStorage,

  // Whitelist (Save Specific Reducers)

  whitelist: ["session"],

  // Blacklist (Don't Save Specific Reducers)

  // blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Setup Thunk Middleware

const thunk = applyMiddleware(thunkMiddleware);

// Compose store enhancers

const enchancers = compose(thunk);

// Compose enhancers

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(thunk);

// Create and export the store

const store: Store<any, any> = createStore(persistedReducer, enchancers);
// const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

// Middleware: Redux Persist Persister

let persistor = persistStore(store);

export { store, persistor };
