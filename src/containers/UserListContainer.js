import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { setSearchTerm } from '../actions';

const mapStateToProps = (state) => {
  return {
    myFirebase: state.firebase,
    users: state.firebase.ordered.users,
    onlineUsers: state.firebase.data.onlineUsers,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (term) => {
      dispatch(setSearchTerm(term));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(['users', 'onlineUsers'])
)(UserList);





