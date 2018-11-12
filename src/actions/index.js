import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, SET_SEARCH_TERM } from "./actionTypes";
import { calculateMessgeId } from "../utils";

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

export const sendMessage = function (from, to, message) {
  let data = {
    from,
    to,
    message,
    time: Date.now()
  }
  let messageId = calculateMessgeId(from, to);
  console.log(data, messageId);
  return (dispatch, getState, getFirebase) => {
    let firebase = getFirebase();
    let ref = firebase.database().ref('/conversations/' + messageId);
    ref.push(data);
    // ref.once('value').then(function (snapshot) {
    //   // let messageList = snapshot.val();
    //   // if (!messageList) ref.push([data]); //create new one
    //   // else {
    //   //   messageList.push(data);
    //   //   ref.set(messageList);
    //   // }
    // })
  }
}