import React, {useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Nav.css';
import {Link} from 'react-router-dom'
import ProfileMenu from './ProfileMenu'


const Nav = () => {

  const { whoAmI, whoIsOnline } = useContext(UserContext);
  

  useEffect(() => {
    whoIsOnline();

  }, [])
  



  return (
    <div className="nav-bar">
    
     <Link to="/"><img className="logoImg" src="https://i.postimg.cc/rmW3W2gM/New-Project-6.png" alt=""/></Link>
      <div className="links">
      <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/profile">Profile</Link>"
      {!whoAmI && <Link to="/login">LOGIN</Link>}
      {!whoAmI && <Link to="/register">REGISTER</Link>} 
      </div>
      <div>
       <ProfileMenu className="profileMenu"/>
      </div>
      

      </div>
  ); 
}

export default Nav;