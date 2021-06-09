import React, {useEffect, useContext} from 'react';
import '../style/Home.css';
import { UserContext } from '../contexts/UserContextProvider'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const { whoIsOnline, updateUser } = useContext(UserContext);
  const dateToday = new Date();
  const getOnlineDate = dateToday.toLocaleString().substring(0, 16);
  const history = useHistory();
  
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
  
  const buttonHandler = (btn) => {
    if (btn === 'register') {
      history.push('/register')
    }
    if (btn === 'forum') {
      history.push('/forum')
    }
    
  }


  return (
    <div className="homeWrapper">
   

      <div className="home">

        <img className="homeImage" src="https://www.trinity.qld.edu.au/wp-content/uploads/2020/06/Trinity_website_Two-new-Undergraduate-Certificates-Courses-available-now-at-Trinity.jpg" alt=""/>
        <div className="startTravel">
          
          <div className="homeInfoDiv">
            <p className="homeInfoP">Få hjälp av lärare och studenter med dina studier.</p>
            <p className="homeInfoP2">Skapa diskutioner med tusentals studenter.</p>
          </div>
        <p>Till Forumet</p>
        <button onClick={() => buttonHandler('forum')}  className="exploreBtn" >Utforska forumet nu</button>
        </div>

        
        <div className="startTravel" style={{float: 'right', marginRight: '10vw'}}>
        <p>BLI MEDLEM</p>
        <button onClick={() => buttonHandler('register')}  className="exploreBtn" >Registrera konto</button>
        </div>
      </div>
      </div>
  );
}
 
export default Home;