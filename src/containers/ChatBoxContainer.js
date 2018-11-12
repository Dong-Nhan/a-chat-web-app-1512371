import ChatBox from '../components/ChatBox'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { calculateMessgeId } from '../utils';

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

  }
}

export default compose(
  firebaseConnect(['users', 'onlineUsers', 'conversations']),
  connect(mapStateToProps, mapDispatchToProps)
)(ChatBox);





