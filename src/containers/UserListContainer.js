import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import { setSearchTerm } from '../actions';

const filterUsers = function (users, searchTerm) {
  if (!users || !searchTerm) return users;
  //filter user has dislpayName matchs searchTerm
  return users.filter(function (user) {
    return user.value.displayName.indexOf(searchTerm) !== -1;
  })
}

const mapStateToProps = (state) => {
  return {
    users: filterUsers(state.firebase.ordered.users, state.searchTerm),
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





