import UserList from '../components/UserList'
import { connect } from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import _ from "lodash";
import { setSearchTerm, starUser } from '../actions';

const filterUsers = function (users, searchTerm) {
  if (!users || !searchTerm) return users;
  //filter user has dislpayName matchs searchTerm
  return users.filter(function (user) {
    return user.value.displayName.indexOf(searchTerm) !== -1;
  })
}

const sortUsers = function (users, onlineUsers, myId) {
  if (!users) return users;
  onlineUsers = onlineUsers || {};
  let usersRefined = users.map((user) => {
    let myAccount = _.find(users, (user) => {
      return user.key === myId;
    })

    //add online status
    let isOnline = onlineUsers.hasOwnProperty(user.key);
    user.value.isOnline = isOnline;

    //add isStarred status
    let myStars = myAccount.value.myStars;
    let isStarred = (myStars && myStars.hasOwnProperty(user.key)) ? myStars[user.key] : false;
    user.value.isStarred = isStarred;

    //add lastConversation timestamp
    let myLastConversations = myAccount.value.lastConversations;
    let lastConversation = (myLastConversations && myLastConversations.hasOwnProperty(user.key)) ? myLastConversations[user.key] : 0;
    user.value.lastConversation = lastConversation;

    return user;
  })

  //final sorting
  let vipUsers = usersRefined.filter((item) => item.value.isOnline && item.value.isStarred); 
  let theOthers = usersRefined.filter((item) => !(item.value.isOnline && item.value.isStarred));
  
  let sortFields = ['value.lastConversation', 'value.displayName'];
  let sortOrders = ['desc', 'asc'];
  
  let results = _.concat(_.orderBy(vipUsers, sortFields, sortOrders), _.orderBy(theOthers, sortFields, sortOrders))
  
  return results;
}

const mapStateToProps = (state) => {
  return {
    myId: state.firebase.auth.uid,
    users: filterUsers(sortUsers(state.firebase.ordered.users, state.firebase.data.onlineUsers, state.firebase.auth.uid), state.searchTerm),
    onlineUsers: state.firebase.data.onlineUsers,
    searchTerm: state.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (term) => {
      dispatch(setSearchTerm(term));
    },
    starUser: (userId) => {
      dispatch(starUser(userId));
    }
  }
}

export default compose(
  firebaseConnect(['users', 'onlineUsers']),
  connect(mapStateToProps, mapDispatchToProps)
)(UserList);





