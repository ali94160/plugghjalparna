import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import PostList from '../components/PostList';
import SwePostList from '../components/SwePostList';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useHistory } from 'react-router-dom'

const SweSubForum = () => {

  const history = useHistory();
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
        <header className="forumHeader"><h3 style={{ height: '5px' }} >Svenska</h3><KeyboardReturnIcon onClick={() => history.push('/forum')} style={{ cursor: 'pointer'}}/></header>

        <div>
          {console.log(swePosts, 'swe?')}
          {swePosts && <SwePostList swePosts={swePosts} />}
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

export default SweSubForum;;