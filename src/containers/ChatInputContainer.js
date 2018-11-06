import ChatInput from '../components/ChatInput'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';

const mapStateToProps = (state, ownProps) => {
  return {
    myFirebase: state.firebase,
    users: state.firebase.ordered.users,
    onlineUsers: state.firebase.data.onlineUsers,
    ...ownProps
  }
}

export default compose(
  connect(mapStateToProps),
  firebaseConnect(['users', 'onlineUsers'])
)(ChatInput);





