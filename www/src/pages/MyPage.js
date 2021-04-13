import React,{ useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/MyPage.css'

const MyPage = () => {


  const history = useHistory();
  const { id } = useParams();
  const { whoAmI, whoIsOnline, fetchUsers } = useContext(UserContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState(null);

  


  useEffect(() => {
    whoIsOnline().then(user => {
      if (!user) {
        history.push("/")
      } else {
        setUser(user);
        console.log(user);
      }
    });
 
     }, [])

    return (
      <div className="myPageDiv">

        <div className="profileInfo">
          <h2>UserID: {user && user._id}</h2>
          <h2>Name: {user && user.firstName}</h2>
          <h2>role: {user && user.roles}</h2>
          
        </div>
      

      </div>



    );
  }

export default MyPage;