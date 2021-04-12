import React, { useState } from 'react';
import '../style/Register.css';
import { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'


export default function CreateUser () {
  const history = useHistory();
  const { addUser } = useContext(UserContext);

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const [alreadyAUser, setAlreadyAUser] = useState(false);

  const createUser = async e => {
    e.preventDefault();
    
    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value
    }
    const res = await addUser(user);
    if (!res) {
      setAlreadyAUser(true);
      return;
    }

    history.push('/');
    
  }


    return (
      <div className="register">
        <div className="grid-container">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item-input">
            <form key="1" onSubmit={createUser}>
              <div className="inner-grid" ><input required ref={firstName} key="2" placeholder="First name" /></div>

              <div className="inner-grid"><input required ref={lastName} key="3" placeholder="Last name" /></div>

              <div className="inner-grid"><input required ref={email} key="4" placeholder="email" /></div>

              <div className="inner-grid"><input required ref={password} key="5" placeholder="password" /></div>

              <div className="inner-grid"><input required ref={confirmPassword} key="6" placeholder="confirm password" /></div>

              <div className="inner-grid-btn">
                {alreadyAUser && <p className="alreadyAUser">⚠️ Their is already a user with this email address..</p>}
                <button className="registerButton" key="7">Register</button>
              </div>
            </form>
          </div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    );
  
}
