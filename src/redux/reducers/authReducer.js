import produce from "immer";
import actionTypes from "../actionTypes/authTypes";

const initialState = {
  isLoggedIn: false,
  userDetails: {},
  showBaner: true,
};

const authReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.UPDATE_LOGGED_IN:
        draft.isLoggedIn = action.payload;
        break;
      case actionTypes.UPDATE_USER_DETAILS:
        draft.userDetails = action.payload;
        break;
      case actionTypes.UPDATE_BANER:
        draft.showBaner = action.payload;
        break;
    }
  });

export default authReducer;
