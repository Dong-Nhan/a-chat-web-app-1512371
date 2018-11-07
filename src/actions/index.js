import { SIGN_IN_SUCCESS, SIGN_IN_FAIL } from "./actionTypes";
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


// export const chooseUserSuccess = function (userId) {
//   console.log(userId, 'in chooseUserSuccess');
//   return {
//     type: CHOOSE_USER_SUCCESS,
//     userId: userId
//   }
// }

// export const chooseUserFail = function () {
//   return {
//     type: CHOOSE_USER_FAIL
//   }
// }

// //choose user to chat with
// export const chooseUser = function (userId) {
//   console.log('chooseUser');
//   return (dispatch, getState) => {
//     //check if userId is valid
//     let myFirebase = getState().firebase;
//     let users = myFirebase.data.users || {};
//     if (users.hasOwnProperty(userId)) dispatch(chooseUserSuccess(userId));
//     else dispatch(chooseUserFail());
//   }
// }

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