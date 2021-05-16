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
    <p className="postTitle">{posts.title}</p>
      <p><span style={{ fontWeight: 'bold', fontSize: '12px' }}>AV:</span> {posts.postedByName}  {posts.postedByLastName}</p>
      <p>{posts.postedDate}</p>
      <p>visningar: {posts.postViews}</p>
      { posts.isPinned && <BookmarksSharpIcon />}
      { posts.isLocked && <LockSharpIcon/>}
      
    </div>
  );
}

export default Post;