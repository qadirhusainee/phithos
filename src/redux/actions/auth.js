import actionTypes from "../actionTypes/authTypes";

export const updateLoggedIn = (isLoggedIn) => {
  return {
    type: actionTypes.UPDATE_LOGGED_IN,
    payload: isLoggedIn,
  };
};

export const updateUserDetail = (data) => {
  return {
    type: actionTypes.UPDATE_USER_DETAILS,
    payload: data,
  };
};

export const updateBaner = (data) => {
  return {
    type: actionTypes.UPDATE_BANER,
    payload: data,
  };
};
