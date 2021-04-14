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
  const age = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const country = useRef('');
  const roles = useRef('Member'); // vid POST
  const profileImgURL = useRef('');
  const myPosts = useRef([]); // vid POST
  const lastTimeOnline = useRef(''); // vid POST
  const profileViews = useRef(); // vid POST
  const aboutMeText = useRef(''); 
  const banTime = useRef(); // VID POST



  const [alreadyAUser, setAlreadyAUser] = useState(false);

  const createUser = async e => {
    e.preventDefault();
    
    const dateToday = new Date();
    const getTodayToString = dateToday.toString().substring(0, 15);
    
    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      age: age.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
      createdTime: getTodayToString,
      country: country.current.value,
      roles: 'Member',
      profileImgURL: profileImgURL.current.value,
      myPosts: null,
      lastTimeOnline: '',
      profileViews: 0,
      aboutMeText: aboutMeText.current.value,
      banTime: ''

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

              <div className="inner-grid"><input type="Number" required ref={age} key="4" placeholder="Age" /></div>

              <div className="inner-grid"><input required ref={email} key="5" placeholder="Email" /></div>

              <div className="inner-grid"><input required ref={country} key="6" placeholder="Country" /></div>

              <div className="inner-grid"><input ref={aboutMeText} key="7" placeholder="About me..." /></div>

              <div className="inner-grid"><input ref={profileImgURL} key="8" placeholder="Link to Image" /></div>

              <div className="inner-grid"><input required ref={password} key="9" placeholder="Password" /></div>

              <div className="inner-grid"><input required ref={confirmPassword} key="10" placeholder="Confirm Password" /></div>

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
  //   email: { type: String, required: true },
  // firstName: { type: String, required: true },
  // lastName: { type: String, required: true },
  // password: { type: String, required: true },
  // createdTime: { type: String },
  // country: { type: String, required: true },
  // roles: { type: String, required: true },
  // profileImgURL: { type: String },
  // myPosts: { type: Array },
  // lastTimeOnline: { type: String },
  // profileViews: { type: Number },
  // aboutMeText: { type: String },
  // banTime: { type: Number },
}
