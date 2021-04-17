import React, { useContext, useEffect, useState, useRef} from 'react';
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
  const [allUsers, setAllUsers] = useState(null);
  const classes = useStyles();

  const textInput = React.useRef();

  const clearInput = () => {
    (textInput.current.value = "");
    setAllUsers([...users])
  }

  const search = async (e) => {
    let input = await e.target.value;
    input.toLowerCase();

    if (e.target.value) {
      const filtered = allUsers.filter(u => u.firstName.toLowerCase().includes(input.toLowerCase()))
      console.log(filtered);
      console.log(e.target.value);
      setAllUsers([...filtered])
    }  else {
      setAllUsers([...users])
      return;
      }
  }
 
  useEffect(() => {
    fetchUsers().then(u => {
      setAllUsers([...u])
      })
  },[]);
  
  
  return (
    <div className="users">
      <div  className="titleDiv">
        <input onChange={search} ref={textInput} type="text" placeholder="Sök användare" /><button onClick={clearInput}>Rensa</button> {/* rensa on click*/}
        </div>

        {!allUsers && <div className={classes.root}>
          <CircularProgress style={{ margin: '0 auto' }} />
        </div>}
       
      {allUsers && <UserList users={allUsers} />}
    </div>


  );
}
export default Users;