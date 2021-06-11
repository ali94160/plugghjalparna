import React, {useEffect, useState, useContext} from 'react'
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import Post from './Post'
import '../style/Forum.css';

const PostList = ({posts, pinnedMathPosts}) => {

  return (
    <>
      {pinnedMathPosts && <div className="postListDiv">
        {pinnedMathPosts.reverse().map(p => (
          <Post key={p._id} posts={p} />
        ))}
      </div>}
      {posts && <div className="postListDiv">
        {posts.map(p => (
          <Post key={p._id} posts={p} />
        ))}
      </div>}
    </>)
}

export default PostList;