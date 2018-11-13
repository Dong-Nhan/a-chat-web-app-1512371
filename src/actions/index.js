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
    firebase.remove('onlineUsers/' + getState().firebase.auth.uid);
    firebase.logout();
  }
}

export const setSearchTerm = function (term) {
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
    firebase.push('/conversations/' + messageId, data);
    //modify last conversation timestamp
    firebase.set(`/users/${from}/lastConversations/${to}`, Date.now());
  }
}

export const starUser = function (userId) {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    const myId = getState().firebase.auth.uid;
    const myStarPath = `users/${myId}/myStars/${userId}`;
    firebase.database().ref(myStarPath).once('value', (snapshot) => {
      if (!snapshot.val()) firebase.set(myStarPath, true); //first time
      else firebase.set(myStarPath, !snapshot.val());
    });
  }
}