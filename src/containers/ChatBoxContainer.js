import ChatBox from '../components/ChatBox'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { chooseUser } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    myFirebase: state.firebase,
    users: state.firebase.ordered.users,
    onlineUsers: state.firebase.data.onlineUsers,
    ...ownProps
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    chooseUser: (userId) => {
      dispatch(chooseUser(userId))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(['users', 'onlineUsers'])
)(ChatBox);





