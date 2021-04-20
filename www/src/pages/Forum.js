import React from 'react'
import '../style/Forum.css';


const Forum = () => {



  return (
    <div className="forumWrapper">

      <div className="forumBoard">
        <header className="forumHeader"><h3>FORUM</h3></header>
      </div>

      

      <div className="forumSideBoard">
        <h1>sideBoard</h1>
        <div style={{ background: 'yellow', width: '100%', height: '40%', marginBottom: '30px' }}></div>
        <div style={{background: 'yellow', width: '100%', height: '40%'}}></div>
      </div>
  
    </div>

  );

}

export default Forum;