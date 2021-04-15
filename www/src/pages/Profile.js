import React, {useContext, useEffect, useState, useRef} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Profile.css'

const Profile = () => {

  const { id } = useParams();
  const { users, fetchUsers } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);
  const user = users.find(r => r._id === id);



  useEffect(() => {
    if (user) {
      fetchUsers()
    }
    
    
    console.log(user);
    console.log(user);
  }, []);
  

  return (
    <div className="profileDiv">
      <h4>Profile Page</h4>
      <p>{user && user.email}</p>
    </div>


  );
}
export default Profile;