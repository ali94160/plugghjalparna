import React, { useState, createContext, useEffect } from 'react'


export const UserContext = createContext();


export const UserProvider = (props) => {

  const [users, setUsers] = useState([]);
  const [whoAmI, setWhoAmI] = useState(null);

  
  const fetchUsers = async() => {
    let data = await fetch('/rest/users', {
      headers : { 
        'Content-Type': 'application/json'
       }
    })
    data = await data.json();
    console.log(data , "här");
    setUsers([...data]);
    return data;
  }

  useEffect(() => {
    fetchUsers();
    whoIsOnline();
  }, []);

  const addUser = async user => {
    let res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json();

    // if (res === 'banned') {
    //   console.log("vi fattar bannad");
    // }
    if (res.success) {
      setUsers([...users, user])

      const userToLogin = {
        email: user.email,
        password: user.password
      };
      await login(userToLogin)
      whoIsOnline();
      return true;

    } else {
      return false;
    }
  }

  const login = async user => {
    let res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    res = await res.json();
    if (!res) {
    } else {
      // console.log(user, 'userrr');
      // console.log(res, 'resss');
      return res;
    }
  }


  const logOut = async () => {
    let res = await fetch('/api/login', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
    // eslint-disable-next-line no-unused-vars
    res = await res.json();
    setWhoAmI(null);
  }


  const whoIsOnline = async () => {
    let data = await fetch('/api/login')
    data = await data.json();
    if (!data) {
      setWhoAmI(null);
      return null;
    } else {
      setWhoAmI({ ...data });
      return data;
    }
  }


  const updateUser = async (id, userObj) => {
     let res = await fetch('/rest/users/' + id, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(userObj)
     })

    res = await res.json()
    fetchUsers();
  }

    const updateWhoAmI = async (id, userObj) => {
     let res = await fetch('/api/login/' + id, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(userObj)
     })

    res = await res.json()
      whoIsOnline();
  }


   const values = {
    users,
    setUsers,
    addUser,
    login,
    whoIsOnline,
    whoAmI,
    logOut,
    fetchUsers,
     updateUser,
    updateWhoAmI
  }
  
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>
  );
}
