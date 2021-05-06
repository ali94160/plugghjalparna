import React from 'react'
import '../style/ForumPosts.css'
const SwePost = ({swePosts}) => {



  

  return (
    <div className="postDiv">
      
      <p className="postTitle">title: {swePosts.title}</p>
      <p>posted by: {swePosts.postedByName }  { swePosts.postedByLastName}</p>
    </div>
  );
}

export default SwePost;