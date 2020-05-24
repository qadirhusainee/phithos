import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { updateBaner, updateLoggedIn, updateUserDetail } from "./auth";
import actionTypes from "../actionTypes/authTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("On updateLoggedIn dispatch update store with loggedIn flag", () => {
  const store = mockStore({});
  it("Login", () => {
    store.dispatch(updateLoggedIn(true));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: actionTypes.UPDATE_LOGGED_IN,
      payload: true,
    });
  });

  it("Logout", () => {
    store.dispatch(updateLoggedIn(false));
    const actions = store.getActions();
    expect(actions[1]).toEqual({
      type: actionTypes.UPDATE_LOGGED_IN,
      payload: false,
    });
  });
});

describe("User Details", () => {
  const store = mockStore({});
  it("on dispatch of action should payload to state", () => {
    const userDetails = {
      email: "qadirhusainee@gmail.com",
      password: "Password@123",
    };
    store.dispatch(updateUserDetail(userDetails));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: actionTypes.UPDATE_USER_DETAILS,
      payload: userDetails,
    });
  });
});

describe("Toggle Baner", () => {
  const store = mockStore({});
  it("on dispatch of action should payload to state", () => {
    store.dispatch(updateBaner(false));
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: actionTypes.UPDATE_BANER,
      payload: false,
    });
  });
});
