import React, {useContext, useEffect, useState, useRef} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Profile.css'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import ProfilePostItem from '../components/ProfilePostItem';
import { PostContext } from '../contexts/PostContextProvider'
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PremiumBadge from '../components/PremiumBadge';

const Profile = () => {

  const { id } = useParams();
  const { users, fetchUsers,updateUser } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);
  const user = users.find(r => r._id === id);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

    const { posts} = useContext(PostContext)
  const post = posts.filter(p => p.userID === id);
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
          {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small" /><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small" /><span> {user.roles}</span></p>}
          {user.premium && <PremiumBadge />}
        </div>
        <div className="profileInfo">
          <p>{!user.premium ? <span>Namn </span> : <span style={{color: '#db6001'}}>Namn </span>}<p>{user.firstName}</p></p>
          <p>{!user.premium ? <span>Efternamn </span> : <span style={{color: '#db6001'}}>Efternamn </span>}<p>{user.lastName}</p></p>
          <p>{!user.premium ? <span>Ålder </span> : <span style={{color: '#db6001'}}>Ålder </span>}<p>{user.age}</p></p>
          <p>{!user.premium ? <span>Omg mig </span> : <span style={{color: '#db6001'}}>Omg mig </span>}<p>{user.aboutMeText}</p></p>
         
        </div>
        <div className="profileInfo2">
          <p>{!user.premium ? <span>Medlem sedan </span> : <span style={{color: '#db6001'}}>Medlem sedan </span>}<p>{user.createdTime}</p></p>
          <p>{!user.premium ? <span>Senast inloggad </span> : <span style={{color: '#db6001'}}>Senast inloggad </span>}<p>{date}</p></p>
          <p>{!user.premium ? <span>Klockan </span> : <span style={{color: '#db6001'}}>Klockan </span>}<p>{time}</p></p>
          <p>{!user.premium ? <span>Antal besökare </span> : <span style={{color: '#db6001'}}>Antal besökare </span>}<p>{user.profileViews}</p></p>
        </div>
       
      </div>}

      <div className="profileBotInfo">

     
        {user && post && <div style={{ overflow: 'auto', height: '300px'}}>
          <p className="myPostsText"><ListAltRoundedIcon style={{ fontSize: '15px' }} /> {user.premium ? <span style={{color: '#db6001'}}>Mina inlägg</span> : <span>Mina inlägg</span>}</p>
        {post.map(post => {
          return <ProfilePostItem thePost={post} id={id} />
        })}
      </div>}

 
     
        <div>
          <p className="myPostsText2"><img className="coinIcon" src='https://image.flaticon.com/icons/png/512/61/61483.png' alt=''></img>{user.premium ? <span style={{color: '#db6001'}}>Mina märken & Mynt</span> : <span>Mina märken & Mynt</span>}</p>
          </div>
         </div>
      
    </div>


  );
}
export default Profile;