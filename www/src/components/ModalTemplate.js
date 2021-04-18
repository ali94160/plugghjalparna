import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Modal from '@material-ui/core/Modal';


const ModalTemplate = (props) => {

 const [open, setOpen] = useState(false);

  // MODAL Start
  // Reqs: Props / handleOpen, handleClose, Open and a OnClick on parent component.


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
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none'
  },
}));



    const classes = useStyles();
  // Modal body
  const [modalStyle] = useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CloseRoundedIcon onClick={props.handleClose} />
     
    </div>
  );
  // Modal end

  return (
          <div className="delete">
            <Modal
              open={props.open}
              onClose={props.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
             >
              {body}
            </Modal>
          </div>
  );

}

export default ModalTemplate;