import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'C:/Users/NHAN/AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';

const mapStateToProps = (state) => {
  return {
    myFirebase: state.firebase,
    users: state.firebase.ordered.users
  }
}

export default compose(
  connect(mapStateToProps),
  firebaseConnect(['users'])
)(UserList);





