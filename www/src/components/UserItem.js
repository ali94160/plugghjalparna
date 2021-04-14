import React from 'react';
import '../style/UserItem.css'

const UserItem = ({ user }) => {

  const defaultIMG = "https://lh3.googleusercontent.com/proxy/y2rXhAQHDj7labWbTqIGqSoqko_grkSFbWmdkFDjl4DX98SY52idJDC4NPE5zOqxDjfCMlMmdpvBajce-VptEXGtph7UoHy3IVbre1Lr3kFlHGFfrCW7Hyyq"



  return (
    <div className="userItemDiv">

      <div className="profileCard">
        <div className="imageCard">
          {user.profileImgURL ? <img src={user.profileImgURL} alt="" /> : <img  className="defaultIMG" src={defaultIMG} alt="" />}
          <p>role: {user.roles} </p>
        </div>
        <div className="infoCard">
          <p>{user.firstName}</p><span>{user.lastName}</span>
          <p>{user.age}</p>
          {user.lastTimeOnline ? <p>LOL{user.lastTimeOnline}</p> : <p>Online</p>}
          <p>{user.country}</p>
        </div>
        
       
          
      </div>
    </div>



    );
  }

export default UserItem;