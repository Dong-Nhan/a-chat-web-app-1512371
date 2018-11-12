import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { SET_SEARCH_TERM } from "../actions/actionTypes";

const searchTerm = function (state = '', action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term;
    default: return state;
  }
}

export default combineReducers({
  firebase: firebaseReducer,
  searchTerm
});