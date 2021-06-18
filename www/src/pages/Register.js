import React, { useState } from 'react';
import '../style/Register.css';
import { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'


export default function CreateUser() {
  
  const history = useHistory();
  const { addUser } = useContext(UserContext);

  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const country = useRef('');
  const profileImgURL = useRef('');
  const aboutMeText = useRef(''); 

  const [alreadyAUser, setAlreadyAUser] = useState(false);

  const createUser = async e => {
    e.preventDefault();
    
    const dateToday = new Date();
    const getRegDate = dateToday.toLocaleString().substring(0, 10);

    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      createdTime: getRegDate,
      country: country.current.value,
      roles: 'Member',
      profileImgURL: profileImgURL.current.value,
      myPosts: null,
      lastTimeOnline: '',
      profileViews: 0,
      aboutMeText: aboutMeText.current.value,
      banTime: '',
      premium: false

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
 
          <div className="grid-item-input">
            <form key="1" onSubmit={createUser}>
              <div className="inner-grid" ><input required ref={firstName} key="2" placeholder="First name" /></div>

              <div className="inner-grid"><input required ref={lastName} key="3" placeholder="Last name" /></div>

              <div className="inner-grid"><input type="Number" required ref={age} key="4" placeholder="Age" /></div>

              <div className="inner-grid"><input required ref={email} key="5" placeholder="Email" /></div>

              <div className="inner-grid"><input required ref={country} key="6" placeholder="Country" /></div>

              <div className="inner-grid"><input ref={aboutMeText} key="7" placeholder="About me..." /></div>

              <div className="inner-grid"><input ref={profileImgURL} key="8" placeholder="Link to Image" /></div>

              <div className="inner-grid"><input required ref={password} key="9" placeholder="Password" /></div>

              <div className="inner-grid"><input required ref={confirmPassword} key="10" placeholder="Confirm Password" /></div>

              <div className="inner-grid-btn">
                {alreadyAUser && <p className="alreadyAUser">⚠️ Their is already a user with this email address..</p>}
                <button className="registerButton" key="7">Skapa konto</button>
              </div>
            </form>
          </div>
  
        </div>
      </div>
    );
}
