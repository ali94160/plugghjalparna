import React, {useContext, useEffect, useState, useRef} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Profile.css'

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
        </div>
        <p>{user.email}</p>
      </div>}
    </div>


  );
}
export default Profile;