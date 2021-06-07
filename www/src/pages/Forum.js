import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import { useHistory } from 'react-router-dom'
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import Tooltip from '@material-ui/core/Tooltip';

const Forum = () => {
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
        <h3 style={{textAlign: 'center', padding: '0', margin: '15px'}}>REKLAM</h3>
        <div style={{ height: 'fit-content'}}>
          <img src="https://i.postimg.cc/0jH8n61C/template.png" alt=""/>
        </div>
      </div>
    
  
    </div>

  );

}

export default Forum;