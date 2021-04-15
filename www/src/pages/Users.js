import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import UserList from '../components/UserList';
import { useHistory } from 'react-router-dom';
import '../style/Users.css'


const Users = () => {

  const { users, fetchUsers } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);


  useEffect(() => {
    fetchUsers().then(u => {
        setAllUsers([...u])
      })

  },[]);
  
  
  
  return (
    <div className="users">
      <div>
        <h4>User List</h4>
        </div>
      {AllUsers && <UserList users={AllUsers} />}
    </div>


  );
}
export default Users;