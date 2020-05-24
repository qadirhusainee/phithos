import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import reducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({});
  const middleWares = __DEV__
    ? [require("redux-immutable-state-invariant").default(), thunk]
    : [thunk];
  const enhancer = composeEnhancers(applyMiddleware(...middleWares));

  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
}
