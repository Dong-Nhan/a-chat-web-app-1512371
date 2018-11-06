import { SIGN_IN_SUCCESS, SIGN_IN_FAIL, CHOOSE_USER } from "./actionTypes";

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

export const signInWithGooggle = function() {
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

export const signOut = function() {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase();
    firebase.logout();
  }
}

//choose user to chat with
export const chooseUser = function(userId) {
  console.log(userId);
  return {
    type: CHOOSE_USER,
    userId: userId
  }
}