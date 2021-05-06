import React,{useContext, useEffect, useState} from 'react'
import { UserContext } from '../contexts/UserContextProvider';
import '../style/ForumPosts.css'
// importera post till postList, fixa en post med rätt data.

const Post = ({posts}) => {


  return (
    <div className="postDiv">
    <p className="postTitle">{posts.title}</p>
      <p><span style={{ fontWeight: 'bold', fontSize: '12px' }}>AV:</span> {posts.postedByName}  {posts.postedByLastName}</p>
      <p>{posts.postedDate}</p>
      
    </div>
  );
}

export default Post;