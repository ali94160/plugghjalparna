import React from 'react'
import SwePost from './SwePost'

const SwePostList = ({swePosts}) => {





  return (
    <div>
      {swePosts.map(p => (
        <SwePost key={p._id} swePosts={p}/>
      ))}
    </div>
  );
}

export default SwePostList;