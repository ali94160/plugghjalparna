import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import '../style/UserItem.css'
import { UserContext } from '../contexts/UserContextProvider'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreRoundedIcon from '@material-ui/icons/RestoreRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import NotInterestedRoundedIcon from '@material-ui/icons/NotInterestedRounded';
import { makeStyles } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Modal from '@material-ui/core/Modal';


const UserItem = ({ user }) => {

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"
  const history = useHistory();
  const { whoAmI, updateUser, whoIsOnline } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [banValue, setBanValue] = useState('');
  const [roleValue, setRoleValue] = useState('');
  const [updateMsg, setUpdateMsg] = useState(null);
  const goToProfilePage = () => {
    history.push('/users/' + user._id);
  }


  const changeOptionHandler = (e) => {
    setBanValue(e.target.value);
    console.log(user._id);
  }

  const changeOptionHandler2 = async (e) => {

    setUpdateMsg(true);
    const roleObj = {
      roles: e.target.value
    }
    await updateUser(user._id, roleObj);
   
  }

  const handleOpen = () => {
      setOpen(true);
    setRoleValue(user.roles);
    console.log(user,'ajajaj');
  };

  const handleClose = () => {
    setOpen(false);
    setRoleValue(user.roles);
     window.location.reload();
  };


  // MODAL Start
  function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
  }
  
  const useStyles = makeStyles((theme) => ({
    test: {
      textAlign: 'center',
      width: '100%'
    },
    roleDiv: {
      display: 'inline'
    },
    paper: {
    position: 'absolute',
      width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
      outline: 'none'
    },
    optBar: {
      marginRight: '15px',
    },
    modalStats: {
     marginTop: '50px'
    }
}));



  const classes = useStyles();
  // Modal body
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseRoundedIcon onClick={handleClose} />
      <div className={classes.roleDiv}>
      <p className={classes.test}>HANTERA ANVÄNDARE: <span style={{fontWeight: 'bold'}}>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</span></p>

        <select value={banValue} onChange={changeOptionHandler} required className={classes.optBar} >
          <option  value="DEFAULT" disabled="disabled" >Banna användare i:?</option>
          <option>1 dag</option>
          <option>3 dagar</option>
          <option>7 dagar</option>
          <option>14 dagar</option>
          <option>30 dagar</option>
          <option>Permanent</option>
        </select>
      </div>
      <div className={classes.roleDiv}>
        <select value={roleValue} onChange={changeOptionHandler2} required className={classes.optBar} >
          <option value="DEFAULT" disabled="disabled" >Ändra användarens roll:</option>
          {user.roles === 'Member' ? <option>{user.roles}</option> : <option>Member</option> }
          {user.roles === 'Moderator' ? <option>{user.roles}</option> : <option>Moderator</option>}
          {user.roles === 'Administator' ? <option>{user.roles}</option> : <option>Administator</option>}
        </select>
        
      </div>
      <div className={classes.roleDiv}>
        <button>statistik & info</button>
      </div>
      {updateMsg && <p style={{ color: 'green' }}>{user.firstName} roll har uppdaterats.</p>}
      <div className={classes.modalStats}>
        <p>Antal besökare: </p>
        <p>Antal inlägg</p>
        <p>Användar ID: {user._id}</p>
        <p>email:</p>
      </div>
      
     
    </div>
  );
  // Modal end


  return (
    <div className="userItemDiv">

      <div className="profileCard">
        <div className="imageCard">
          {user.profileImgURL ? <img className="profileIMG" src={user.profileImgURL} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" />}
          {user.banTime ? <NotInterestedRoundedIcon fontSize="small" color="secondary" style={{marginLeft: '-25px'}} /> : ''}
          {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small" /><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small" /><span> {user.roles}</span></p>}
        </div>
        <div className="infoCard">
          <p onClick={goToProfilePage}><PersonRoundedIcon fontSize="small"/> <span className="nameSpan"> {user.firstName} {user.lastName}</span></p>
          <p><RestoreRoundedIcon fontSize="small" />{user.lastTimeOnline ? <p className="timeP">{user.lastTimeOnline.substring(0,10)}</p> : <span style={{color: 'grey'}}>  Never</span>}</p>
          <p><LocationOnIcon fontSize="small" />{user.country}</p>
          {whoAmI.roles === 'Administator' && <p><SettingsRoundedIcon style={{ cursor: 'pointer' }} fontSize="small" /> <span onClick={handleOpen} className="clickableIcon">Hantera</span></p>}
        </div>
        <div className="iconCard">        
        </div> 
      </div>

            <div className="delete">
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
             >
              {body}
            </Modal>
          </div>
          
    </div>
    );
  }

export default UserItem;