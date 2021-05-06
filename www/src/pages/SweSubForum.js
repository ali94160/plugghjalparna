import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import PostList from '../components/PostList';
import SwePostList from '../components/SwePostList';

const SweSubForum = () => {

  const { fetchPosts } = useContext(PostContext)
  const [swePosts, setSwePosts] = useState(null);
  
  useEffect(() => {
    fetchPosts().then(p => {
      if (p) {
        console.log('inne');
        const sweFilter = p.filter(swe => swe.subForum === 'Svenska')
        console.log(sweFilter, 'filtereSwe');
        setSwePosts([...sweFilter])
      } else { 
        } 
      })
  }, []);


  
  return (
    <div className="forumWrapper">

      <div className="forumBoard">
        <header className="forumHeader"><h3>Svenska</h3></header>

        <div>
          {console.log(swePosts, 'swe?')}
          {swePosts && <SwePostList swePosts={swePosts} />}
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

export default SweSubForum;;