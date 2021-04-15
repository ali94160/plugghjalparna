import React, {useContext, useEffect, useState, useRef} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Profile.css'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const Profile = () => {

  const { id } = useParams();
  const { users, fetchUsers } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);
  const user = users.find(r => r._id === id);


  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"



  useEffect(() => {
    if (user) {
      fetchUsers()
    }
    
    
    console.log(user);
    console.log(user);
  }, []);
  

  return (
    <div className="profileDiv">
      {user && <div className="checkWrapper">
        <div className="imgDiv">
          <img className="profileIMG" src={user.profileImgURL} alt="" />
          {user.roles === 'Member' ? <p><VerifiedUserRoundedIcon fontSize="small"/><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small"/><span> {user.roles}</span></p>}
        </div>
        <div className="profileInfo">
          <p><span>Namn </span>{user.firstName}</p>
          <p><span>Efternamn </span>{user.lastName}</p>
          <p><span>Ålder </span>{user.age}</p>
          <p><span>kontakt </span>{user.email}</p>
          <p><span>Om mig </span>{user.aboutMeText}</p>
        </div>
        <div className="profileInfo2">
          <p><span>Medlem sedan </span>{user.createdTime}</p>
          <p><span>Senast inloggad </span>{user.lastTimeOnline}</p>
          <p><span>Antal besökare </span>{user.profileViews}</p>
        </div>
       
      </div>}
    </div>


  );
}
export default Profile;