import React, { useRef, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Login.css'


const Login = () => {

  const history = useHistory();
  const { login,whoIsOnline } = useContext(UserContext);
  const [failed, setFailed] = useState(false);


  const email = useRef()
  const password = useRef()

  const tryToLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value
    };
    
    const res = await login(user);
    if (!res) {
      setFailed(true);
    } else {
      setFailed(false);
      whoIsOnline();
      history.push("/")
    }
  }

  return (
    <div className="login">
      <div className="form-for-login">
        <form onSubmit={tryToLogin}>
        <input ref={email} required placeholder="Email.." type="email" />
          <input ref={password} required placeholder="Password.." type="password" />
          {failed && <p>WRONG USERNAME/PASSWORD</p>}
          <button >Login</button>
          <div>  
           </div>
        </form>
         </div>
    </div>
  );

}

export default Login;