import { createStore } from "redux";

import rootReducer from "../reducers";

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(rootReducer);
  return store;
};
