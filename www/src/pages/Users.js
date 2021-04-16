import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../contexts/UserContextProvider';
import UserList from '../components/UserList';
import '../style/Users.css'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Users = () => {

  const { users, fetchUsers } = useContext(UserContext);
  const [AllUsers, setAllUsers] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    fetchUsers().then(u => {
        setAllUsers([...u])
      })
  },[]);
  
  
  return (
    <div className="users">
      <div>
        <h4>User List</h4>
        {!AllUsers && <div className={classes.root}>
          <CircularProgress style={{ margin: '0 auto' }} />
        </div>}
        </div>
      {AllUsers && <UserList users={AllUsers} />}
    </div>


  );
}
export default Users;