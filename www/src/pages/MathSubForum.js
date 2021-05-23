import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import PostList from '../components/PostList';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom'

const Forum = () => {
// Visa swe och math subjects enskilt i olika sidor, och ha en sub meny forum ist.
  const { fetchPosts } = useContext(PostContext)  
  const [posts, setPosts] = useState(null);
  const history = useHistory();
  
useEffect(() => {
  fetchPosts().then(p => {
    const mathFilter = p.filter(mat => mat.subForum === 'Matematik')
      setPosts([...mathFilter])
    })
},[]);
  
  return (
    <div className="forumWrapper">
      <div className="forumBoard">
        <header className="forumHeader"><h3>FORUM</h3>
        <Tooltip title="SKAPA INLÄGG" arrow >
              <PostAddSharpIcon style={{cursor: "pointer"}} onClick={ () => history.push('/createPost')} />
            </Tooltip></header>
        <div>
          {posts && <PostList posts={posts} />}
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