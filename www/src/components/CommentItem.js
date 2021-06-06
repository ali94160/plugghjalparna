import React,{useContext, useEffect, useState} from 'react'
import '../style/CommentItem.css'
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const CommentItem = ({ comment }) => {

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"
  

  return (
    <div className="commentDivItem">
      <div className="commentAvatar">
        {comment.commentAvatar === '' ? <img className="commentAvatarImg" src={defaultIMG} alt=''></img> : <img className="commentAvatarImg" src={comment.commentAvatar} alt="" />}
        <p className="commentName">{comment.commentBy}</p>
         {comment.commentRole === 'Member' ? <p style={{marginLeft: '17px'}}><CheckCircleRoundedIcon style={{fontSize: '13px'}} /><span> {comment.commentRole}</span></p> : <p style={{marginLeft: '10px'}}><SecurityRoundedIcon color="error" style={{fontSize: '13px'}} /><span style={{color: '#f44336'}}>{comment.commentRole}</span></p>}
      </div>
      <div>
        <p className="commentContent">{comment.commentText}</p>
      </div>
    </div>
  );

}


export default CommentItem;