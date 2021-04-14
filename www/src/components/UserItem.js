import React, { useState, useEffect } from 'react';
import '../style/UserItem.css'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';

const UserItem = ({ user }) => {

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"


  return (
    <div className="userItemDiv">

      <div className="profileCard">
        <div className="imageCard">
          {user.profileImgURL ? <img className="profileIMG" src={user.profileImgURL} alt="" /> : <img  className="defaultIMG" src={defaultIMG} alt="" />}
          <p>{user.roles} </p>
        </div>
        <div className="infoCard">
          <p><PersonRoundedIcon fontSize="small"/> <span> {user.firstName} {user.lastName}</span></p>
          <p><RestoreRoundedIcon fontSize="small" />{user.lastTimeOnline ? <p>{user.lastTimeOnline} </p> : <span>  Never</span>}</p>
          <p><LocationOnIcon fontSize="small" />{user.country}</p>
        </div>
        <div className="iconCard">
          
        </div>
        
       
          
      </div>
    </div>



    );
  }

export default UserItem;