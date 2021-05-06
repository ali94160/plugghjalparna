import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import { useHistory } from 'react-router-dom'
import PostList from '../components/PostList';
import SwePostList from '../components/SwePostList';

const Forum = () => {

  const { fetchPosts } = useContext(PostContext)
  const history = useHistory();

  // TODO: fetcha data för o visa antal posts i varje subforum. OnClick to specefik subforum inlägg. 
  // ? Visa senaste inlägget: img,by, postdate
  
  const [posts, setPosts] = useState(null);
  const [swePosts, setSwePosts] = useState(null);
  
  useEffect(() => {
    fetchPosts().then(p => {
      const mathFilter = p.filter(mat => mat.subForum === 'Matematik')
       setPosts([...mathFilter])
      if (p) {
        console.log('inne');
        const sweFilter = p.filter(swe => swe.subForum === 'Svenska')
        console.log(sweFilter, 'filtereSwe');
        setSwePosts([...sweFilter])
      } else {
       
      }
      
      })
  }, []);

  useEffect(() => {

  },[]);
  
  return (
    <div className="forumWrapper">

      <div className="forumBoard">
        <header className="forumHeader"><h3>FORUM</h3></header>
  

        <div className="subForumBorder" >
          <p className="subForumTitle">Nyheter</p>
          <p className="subBread" style={{fontSize: '15px'}}>Dem senaste Nyheterna hittar du här.</p>
          </div>

           <div className="subForumBorder">
            <p className="subForumTitle">Allmänt</p>
            <p className="subBread" style={{fontSize: '15px'}}>Diskutera om allt mellan himmel och jord.</p>
          </div>
      

          <div className="subForumBorder">
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