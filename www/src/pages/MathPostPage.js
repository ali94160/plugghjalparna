import React,{useContext, useEffect, useState} from 'react'
import '../style/Forum.css';
import '../style/MathPostPage.css'
import { PostContext } from '../contexts/PostContextProvider'
import { UserContext } from '../contexts/UserContextProvider';
import { useHistory, useParams } from 'react-router-dom'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import NotInterestedRoundedIcon from '@material-ui/icons/NotInterestedRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import BookmarksSharpIcon from '@material-ui/icons/BookmarksSharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';

const MathPostPage = () => {

const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"
  const { fetchPosts, posts } = useContext(PostContext)
  const { users, fetchUsers,updateUser } = useContext(UserContext);
  const history = useHistory();
    const { id } = useParams();
  const post = posts.find(p => p._id === id);
  const user = users.find(r => r._id === post.userID);
  // TODO: fetcha data för o visa antal posts i varje subforum. OnClick to specefik subforum inlägg. 
  // ? Visa senaste inlägget: img,by, postdate

  
 useEffect(() => {
    if (post) {
      fetchPosts()
      fetchUsers()
      
    }
  }, []);
 

  
  return (
    <div className="forumWrapper">

      {post && user &&  <div className="forumBoard">
        <header className="forumHeader"><h3 onClick={() => history.push('/forum')} >FORUM / {post.title}</h3></header>
        <p className="topicTitle"> {post.title} {post.isPinned && <BookmarksSharpIcon color="primary" fontSize="small" />} {post.isLocked && <LockSharpIcon color="error" fontSize="small" />}</p>
        <p className="postNameAndDate"> <span className="postByName"> {post.postedByName}  {post.postedByLastName}</span>, <span>{post.postedDate}</span></p>
        <div className="postDivInfo">
          <div className="imageCard">
            {post.userProfileAvatar ? <img className="profileIMG" src={post.userProfileAvatar} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" />}
            {user.banTime ? <NotInterestedRoundedIcon fontSize="small" color="secondary" style={{ marginLeft: '-25px' }} /> : ''}
            {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small" /><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small" /><span> {user.roles}</span></p>}
          </div>
          <div className="postInfo">
             
            <p>infomration....</p>
          </div>
        </div>

      
      </div>}

      

      <div className="forumSideBoard">
        <h1>sideBoard</h1>
        <div style={{ background: 'yellow', width: '100%', height: '40%', marginBottom: '30px' }}></div>
        <div style={{background: 'yellow', width: '100%', height: '40%'}}></div>
      </div>
  
    </div>

  );

}

export default MathPostPage;