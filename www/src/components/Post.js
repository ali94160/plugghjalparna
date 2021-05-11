import React,{useContext, useEffect, useState} from 'react'
import { UserContext } from '../contexts/UserContextProvider';
import { useHistory } from 'react-router-dom'
import '../style/ForumPosts.css'

// importera post till postList, fixa en post med rätt data.
// NY: Post ID params sen för att skapa inläggets sida.
const Post = ({posts}) => {

  const history = useHistory();

  return (
    <div className="postDiv" onClick={ () => history.push('/forum/matematik/' + posts._id)}>
    <p className="postTitle">{posts.title}</p>
      <p><span style={{ fontWeight: 'bold', fontSize: '12px' }}>AV:</span> {posts.postedByName}  {posts.postedByLastName}</p>
      <p>{posts.postedDate}</p>
      
    </div>
  );
}

export default Post;