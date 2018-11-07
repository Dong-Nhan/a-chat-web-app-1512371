import ChatBox from '../components/ChatBox'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { calculateMessgeId } from '../utils';

// function getMessageList(conversations, )

const mapStateToProps = (state, ownProps) => {
  return {
    myFirebase: state.firebase,
    myId: state.firebase.auth.uid,
    noOneToChat: (() => {
      let users = state.firebase.data.users || {};
      let userId = ownProps.userId;
      if (users.hasOwnProperty(userId)) return false;
      else return true;
    })(),
    messageList: (() => {
      let conversations = state.firebase.data.conversations;
      let messageId = calculateMessgeId(state.firebase.auth.uid, ownProps.userId);
      if (conversations && conversations[messageId]) return conversations[messageId];
      else return {};
    })(),
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // chooseUser: (userId) => {
    //   dispatch(chooseUser(userId))
    // },
    // chooseUserSuccess: (userId) => {
    //   dispatch(chooseUserSuccess(userId));
    // },
    // chooseUserFail: () => {
    //   dispatch(chooseUserFail());
    // }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(['users', 'onlineUsers', 'conversations'])
)(ChatBox);





