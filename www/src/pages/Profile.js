import React, {useContext, useEffect, useState, useRef} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Profile.css'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

const Profile = () => {

  const { id } = useParams();
  const { users, fetchUsers,updateUser } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);
  const user = users.find(r => r._id === id);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"

  
       

  useEffect(() => {
    if (user && user.lastTimeOnline !== null){
      const [date, time] = user.lastTimeOnline.split(' ');
      setDate(date);
        setTime(time);
    } if (user && user.lastTimeOnline === null) {
       setDate('never')
       setTime('never')
    }
  });


  useEffect(() => {
    if (user) {
      fetchUsers()
      
    }
  }, []);


  useEffect(() => {
    if (id) {
      const viewedObj = {
        profileViews: 1
      }
      updateUser(id, viewedObj)
    }
  },[]);
  

  return (
    <div className="profileDiv">
      {user && <div className="checkWrapper">
        <div className="imgDiv">
          {user.profileImgURL ? <img className="profileIMG" src={user.profileImgURL} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" style={{width: '60%'} } />}
          {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small"/><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small"/><span> {user.roles}</span></p>}
        </div>
        <div className="profileInfo">
          <p><span>Namn </span><p>{user.firstName}</p></p>
          <p><span>Efternamn </span><p>{user.lastName}</p></p>
          <p><span>Ålder </span><p>{user.age}</p></p>
          <p><span>Om mig </span><p>{user.aboutMeText}</p></p>
         
        </div>
        <div className="profileInfo2">
          <p><span>Medlem sedan </span><p>{user.createdTime}</p></p>
          <p><span>Senast inloggad</span><p>{date}</p></p>
          <p><span>Klockan</span><p>{time}</p></p>
          <p><span>Antal besökare </span><p>{user.profileViews}</p></p>
        </div>
       
      </div>}

        <div>
          {console.log(user.myPosts ,'posts?')}
        </div>
    </div>


  );
}
export default Profile;