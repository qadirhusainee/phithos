import authReducer, { initialState } from "./authReducer";
import actionTypes from "../actionTypes/authTypes";

/* eslint-disable default-case, no-param-reassign */
describe("Country reducer tests", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("should return the initial state", () => {
    expect(authReducer(undefined, {})).toEqual(state);
  });

  it("should return the isLoggedIn as true on login", () => {
    const expectedResult = { ...initialState, isLoggedIn: true };
    expect(
      authReducer(state, {
        type: actionTypes.UPDATE_LOGGED_IN,
        payload: true,
      })
    ).toEqual(expectedResult);
  });

  it("should return the isLoggedIn as false on logout", () => {
    const expectedResult = { ...initialState, isLoggedIn: false };
    expect(
      authReducer(state, {
        type: actionTypes.UPDATE_LOGGED_IN,
        payload: false,
      })
    ).toEqual(expectedResult);
  });

  it("should ensure that the user data is present and fetching = false when CountriesInfoSuccess is dispatched", () => {
    const userDetails = [
      {
        email: 'qadirhusainee@gmail.com',
        password: 'Password@123'
      },
    ];
    const expectedResult = {
      ...initialState,
      userDetails
    };
    expect(
      authReducer(state, {
        type: actionTypes.UPDATE_USER_DETAILS,
        payload: userDetails,
      })
    ).toEqual(expectedResult);
  });

  it("should update showBaner on call of toggle baner", () => {
    const expectedResult = {
      ...initialState,
      showBaner: false
    };
    expect(
      authReducer(state, {
        type: actionTypes.UPDATE_BANER,
        payload: false,
      })
    ).toEqual(expectedResult);
  });
});