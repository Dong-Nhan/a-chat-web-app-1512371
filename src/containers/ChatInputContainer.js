import ChatInput from '../components/ChatInput'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { sendMessage } from '../actions';

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
      dispatch(sendMessage(from, to, message))
    }
  }
}

export default compose(
  firebaseConnect(['users', 'onlineUsers']),
  connect(mapStateToProps, mapDispatchToProps)
)(ChatInput);





