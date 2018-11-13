import ChatInput from '../components/ChatInput'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { sendMessage } from '../actions';
import { isValidURL } from '../utils';
import { NORMAL_MESSAGE, URL_MESSAGE } from '../constants';

const mapStateToProps = (state, ownProps) => {
  return {
    myFirebase: state.firebase,
    users: state.firebase.data.users,
    onlineUsers: state.firebase.data.onlineUsers,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (from, to, message) => {
      let type = NORMAL_MESSAGE;
      if (isValidURL(message)) type = URL_MESSAGE;
      dispatch(sendMessage(from, to, message, type))
    }
  }
}

export default compose(
  firebaseConnect(['users', 'onlineUsers']),
  connect(mapStateToProps, mapDispatchToProps)
)(ChatInput);





