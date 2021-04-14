import React, { useContext, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../style/ProfileMenu.css';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';




const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }} {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.main
    },
  },
}))(MenuItem);



export default function CustomizedMenus() {
   const { whoAmI, logOut, whoIsOnline } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  useEffect(() => {
    whoIsOnline();
  },[])
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogOut = () => {
    logOut();
    history.push('/');
  }

  return (
    <div className="profileMenu">
      {whoAmI && <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        
        
        <span className="welcomeMsg" >{whoAmI && whoAmI.firstName}</span> 
        <AccountCircleIcon
          color='primary'
          fontSize="large" />
          
        
      </Button>}

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}>
        
        <StyledMenuItem onClick={() => history.push('/MyProfile')}>
          <ListItemIcon>
            <HomeWorkRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My Profile" />
        </StyledMenuItem>

        <StyledMenuItem onClick={() => onLogOut()}>
          <ListItemIcon>
            <ExitToAppRoundedIcon color="error" fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}