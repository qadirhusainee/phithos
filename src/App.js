import "react-native-gesture-handler";
import { enableES5 } from "immer";
import React from "react";
import type { FunctionComponent } from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Route from "./Route";
import configureStore from "./redux/configureStore";

enableES5();

const { store, persistor } = configureStore();

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
