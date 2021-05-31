import React, {useEffect, useContext} from 'react';
import '../style/Home.css';
import { UserContext } from '../contexts/UserContextProvider'


const Home = () => {

  const { whoIsOnline, updateUser } = useContext(UserContext);
  const dateToday = new Date();
  const getOnlineDate = dateToday.toLocaleString().substring(0, 16);
  
  const start = async () => {
    const user = await whoIsOnline();
    console.log(user, 'ajj');
    const dateObj = {
      lastTimeOnline: getOnlineDate
      }
    updateUser(user._id, dateObj)
    // if (whoAmI.banTime === true) {
    //   console.log('user is banned');
    // } 
  }

  useEffect(() => {
    whoIsOnline().then(user => {
      if (!user) {
          console.log("No user Online");
      } else {
        start(); 
      }
    });
  },[])
  
  const exploreHandler = () => {
    console.log('knape');
    
  }


  return (
    <div className="homeWrapper">
   

      <div className="home">
     

      <div className="startTravel">
        <p>Till Forumet</p>
        <button onClick={exploreHandler}  className="exploreBtn" >Utforska forumet nu</button>
        </div>
      </div>
      </div>
  );
}
 
export default Home;