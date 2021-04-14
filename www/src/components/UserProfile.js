import React,{ useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import '../style/MyPage.css'

const UserProfile = ({ user }) => {




  return (
    <div className="myPageDiv">

      <div className="profileInfo">
        <h2>UserID: {user.firstName}</h2>
        <h2>Name: {user.lastName}</h2>
        <h2>role: {user.roles} </h2>
          
      </div>
    </div>



    );
  }

export default UserProfile;