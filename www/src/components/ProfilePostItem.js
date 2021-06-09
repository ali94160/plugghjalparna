import React,{useContext, useEffect, useState} from 'react';
import '../style/ForumPosts.css'
import BookmarksSharpIcon from '@material-ui/icons/BookmarksSharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import { useHistory } from 'react-router-dom'
import { PostContext } from '../contexts/PostContextProvider'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const ProfilePostItem = ({id, thePost}) => {
  

  const history = useHistory();
  const { posts} = useContext(PostContext)
  const post = posts.filter(p => p._id === id);


  return (
 <div className="postDiv" style={{backgroundColor: 'lightblue', padding: '3px', marginTop: '10px', cursor: 'pointer', width: '50%'}} onClick={ () => history.push('/forum/matematik/' + thePost._id)}>
      {post && <p className="postTitle" style={{ fontWeight: 'bold' }}> {thePost.title}
        <span style={{ marginLeft: '15px' }}>{thePost.isPinned && <BookmarksSharpIcon style={{ fontSize: '12px', marginRight: '3px' }} />} 
          {thePost.isLocked && <LockSharpIcon color="error" style={{ fontSize: '12px' }} />}
          <span style={{ float: 'right', paddingRight: '10px', paddingTop: '6px', fontWeight: 'normal' }}><VisibilityRoundedIcon style={{fontSize: '12px', paddingRight: '3px', margin: '0'}} />{thePost.postViews}</span>
        </span></p>}
      {post && <p style={{ margin: 0, color: '#323536' }}><span style={{ fontWeight: 'bold', fontSize: '12px', margin: 0 }}>AV:</span> {thePost.userRole === 'Administator' ? <span style={{ color: 'crimson' }}>{thePost.postedByName}  {thePost.postedByLastName}</span> : <span style={{ color: 'rgb(0, 88, 170)' }}>{thePost.postedByName}  {thePost.postedByLastName}</span>}, <span>{thePost.postedDate}</span></p>}
      
      </div >
      
  );
}





export default ProfilePostItem;