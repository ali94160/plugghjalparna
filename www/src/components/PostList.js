import React, {useEffect, useState, useContext} from 'react'
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import Post from './Post'


const PostList = ({posts}) => {
  
 

  return (
    <div className="postListDiv">
      {posts.map(p => (
        <Post key={p._id} posts={p}/>
      ))}
    </div>
  );
}

export default PostList;