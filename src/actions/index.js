import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SET_SEARCH_TERM } from "./actionTypes";
import { calculateMessgeId } from "../utils";
import { NORMAL_MESSAGE } from "../constants";

export const signInSuccess = () => {
  return {
    type: SIGN_IN_SUCCESS
  }
}

export const signInFail = () => {
  return {
    type: SIGN_IN_FAIL
  }
}

export const signInWithGooggle = function () {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase.login({
      provider: 'google',
      type: 'popup'
    }).then(() => {
      dispatch(signInSuccess());
    }, err => {
      dispatch(signInFail());
    })
  }
}

export const signOut = function () {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.logout();
  }
}

export const setSearchTerm = function(term) {
  return {
    type: SET_SEARCH_TERM,
    term: term
  }
}

export const sendMessage = function (from, to, message, type = NORMAL_MESSAGE) {
  let data = {
    from,
    to,
    type,
    message,
    time: Date.now()
  }
  let messageId = calculateMessgeId(from, to);
  console.log(data, messageId);
  return (dispatch, getState, getFirebase) => {
    let firebase = getFirebase();
    let ref = firebase.database().ref('/conversations/' + messageId);
    ref.push(data);
  }
}