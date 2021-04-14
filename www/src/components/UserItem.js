import React from 'react';
import '../style/UserItem.css'

const UserItem = ({ user }) => {




  return (
    <div className="userItemDiv">

      <div className="profileCard">
        <h2>UserID: {user.firstName}</h2>
        <h2>Name: {user.lastName}</h2>
        <h2>role: {user.roles} </h2>
          
      </div>
    </div>



    );
  }

export default UserItem;