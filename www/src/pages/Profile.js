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
        <h4>Profile Page</h4>
        <div className="imgDiv">
          <img className="profileIMG" src={user.profileImgURL} alt="" />
          {user.roles === 'Member' ? <p><VerifiedUserRoundedIcon fontSize="small"/><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small"/><span> {user.roles}</span></p>}
        </div>
        <div className="profileInfo">
 <p>{user.email}</p>
        </div>
       
      </div>}
    </div>


  );
}
export default Profile;