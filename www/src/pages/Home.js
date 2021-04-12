import React, {useEffect, useContext} from 'react';
import '../style/Home.css';
import {Link} from 'react-router-dom'
import { useHistory} from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'


const Home = () => {

  const { whoIsOnline } = useContext(UserContext);
  const history = useHistory();
  
  const start = async () => {
    const user = await whoIsOnline();
    console.log(user);
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
    console.log("tar mig till en sida");
    
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