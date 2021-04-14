import React from 'react'
import UserProfile from './UserItem';
import '../style/UserList.css';

const UserList = ({users}) => {




  return (
    <div className="userListDiv">
      {users.map(user => (
        <UserProfile key={user._id} user={user}/>
      ))}
    </div>


  );
}

export default UserList;