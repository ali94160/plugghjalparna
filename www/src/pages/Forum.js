import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import { useHistory } from 'react-router-dom'
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import Tooltip from '@material-ui/core/Tooltip';

const Forum = () => {

  const { fetchPosts } = useContext(PostContext)
  const history = useHistory();

  
  return (
    <div className="forumWrapper">

      <div className="forumBoard">
        <header className="forumHeader"><h3>FORUM</h3> 
            <Tooltip title="SKAPA INLÄGG" arrow >
              <PostAddSharpIcon style={{cursor: "pointer"}} onClick={ () => history.push('/createPost')} />
            </Tooltip>
          </header>

        <div className="subForumBorder" >
          <p className="subForumTitle">Nyheter</p>
          <p className="subBread" style={{fontSize: '15px'}}>Dem senaste Nyheterna hittar du här.</p>
          </div>

           <div className="subForumBorder">
            <p className="subForumTitle">Allmänt</p>
            <p className="subBread" style={{fontSize: '15px'}}>Diskutera om allt mellan himmel och jord.</p>
          </div>
      

          <div className="subForumBorder" onClick={() => history.push('/forum/matematik')} >
          <p className="subForumTitle">Matematik</p>
          <p className="subBread" style={{fontSize: '15px'}}>Diskutioner om ämnet Matematik.</p>
          </div>
        

     
          <div className="subForumBorder" onClick={() => history.push('/forum/svenska')} >
          <p className="subForumTitle">Svenska</p>
          <p className="subBread" style={{fontSize: '15px'}}>Diskutioner om ämnet Svenska.</p>
          </div>
   
          
           <div className="subForumBorder">
          <p className="subForumTitle">Engelska</p>
          <p className="subBread" style={{fontSize: '15px'}}>Diskutioner om ämnet Engelska.</p>
          </div>


        
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