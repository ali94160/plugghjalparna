import React,{useContext, useEffect, useState} from 'react'
import { UserContext } from '../contexts/UserContextProvider';
import { useHistory } from 'react-router-dom'
import '../style/ForumPosts.css'
import BookmarksSharpIcon from '@material-ui/icons/BookmarksSharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';

// importera post till postList, fixa en post med rätt data.
// NY: Post ID params sen för att skapa inläggets sida.
const Post = ({posts}) => {

  const history = useHistory();

  return (
    <div className="postDiv" onClick={ () => history.push('/forum/matematik/' + posts._id)}>
      <p className="postTitle">{posts.title}
         <span style={{marginLeft: '15px'}}>{posts.isPinned && <BookmarksSharpIcon style={{fontSize: '12px', marginRight: '3px'}} />}
          {posts.isLocked && <LockSharpIcon color="error" style={{fontSize: '12px'}} />}
        </span></p>
      <p style={{margin: 0, color: '#323536'}}><span style={{ fontWeight: 'bold', fontSize: '12px', margin: 0 }}>AV:</span> {posts.postedByName}  {posts.postedByLastName}, <span>{posts.postedDate}</span><span style={{float: 'right', paddingRight: '10px'}}>visningar: {posts.postViews}</span></p>
      
      
    </div>
  );
}

export default Post;