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
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import PostAddSharpIcon from '@material-ui/icons/PostAddSharp';

const MathPostPage = () => {

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"
  const { fetchPosts, posts, updatePost } = useContext(PostContext)
  const { users, fetchUsers, whoAmI } = useContext(UserContext);
  const history = useHistory();
  const { id } = useParams();
  const post = posts.find(p => p._id === id);
  const user = post && users.find(r => r._id === post.userID);
  const [likeCheck, setLikeCheck] = useState(false)
  

  // TODO: fetcha data för o visa antal posts i varje subforum. OnClick to specefik subforum inlägg. 
  // ? Visa senaste inlägget: img,by, postdate

  const renderLikedUsers = () => (
    <div>
      <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Gillas av</span>



      {post.likes.map(like => (
        <span key={like._id} style={{ fontSize: '15px'}}>
           , {like.firstName} {like.lastName}
        </span> 
        ))}
    </div>
  );
  const likeChecker = () => {
    if (!post.likes.find(l => l._id === whoAmI._id)) {
      console.log("trueee");
      setLikeCheck(true)
    } else {
      console.log("Fallze");
      setLikeCheck(false);
    }

  };
 
  
  

  const addLike = () => {
    if (id && whoAmI && !post.likes.find(l => l._id === whoAmI._id)) {
      console.log("test", whoAmI);
      const postObj = {
        likes: whoAmI
      }
      updatePost(id, postObj)
    }
  }


  useEffect(() => {
    if(whoAmI && post)
    likeChecker()
  },[likeChecker]);
  
  
  useEffect(() => {
    
    if (post && post.userID && whoAmI) {
      fetchPosts()
      fetchUsers()
    
    }
  }, []);


  
  return (
    <div className="forumWrapper">

      {post && user &&  <div className="forumBoard">
        <header className="forumHeader"><h3 onClick={() => history.push('/forum')} >FORUM / {post.title}</h3>
                <Tooltip title="SKAPA INLÄGG" arrow >
              <PostAddSharpIcon style={{cursor: "pointer"}} onClick={ () => history.push('/createPost')} />
            </Tooltip></header>

        <p className="topicTitle"> {post.title} {post.isPinned && <BookmarksSharpIcon color="primary" fontSize="small" />} {post.isLocked && <LockSharpIcon color="error" fontSize="small" />} </p>
        <div className="postNameAndDate"> {post.userRole === 'Administrator' ? <span className="postByName"> {post.postedByName}  {post.postedByLastName}</span> :
          <span style={{ color: '#f44336', fontWeight: 'bold' }}> {post.postedByName}  {post.postedByLastName}</span>} <span>,
            {post.postedDate}</span>
          <Tooltip title={renderLikedUsers()} arrow >
            <span className="likes"> <span style={{fontSize: '20px', color: '#1a39e2'}}> { post.likes.length}</span> {whoAmI && likeCheck ? <ThumbUpOutlinedIcon style={{ fontSize: '17px', color: '6879d6' }} onClick={addLike} /> : <ThumbUpOutlinedIcon style={{ fontSize: '17px', color: '#1a39e2' }}   />} </span>
          </Tooltip>
        </div>

        <div className="postDivInfo">
          <div className="imageCard" style={{position: 'relative', top: '-60px'}}>
            {post.userProfileAvatar ? <img className="profileIMG" src={post.userProfileAvatar} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" />}
            {user.banTime ? <NotInterestedRoundedIcon fontSize="small" color="secondary" style={{ marginLeft: '-25px' }} /> : ''}
            {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small" /><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small" /><span> {user.roles}</span></p>}
          </div>
          
          <div className="postInfo">
            <div><p>{post.description}</p></div>
          </div>


          <div className="underInfo">
            <div className="commentProfile">
              {whoAmI.profileImgURL ? <img className="profileIMG" src={whoAmI.profileImgURL} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" />}
              </div>
              {whoAmI.roles === "Administator" ? <span className="commentName" style={{ color: '#f44336', fontWeight: 'bold' }}> {whoAmI.firstName}  {whoAmI.lastName}</span> :
              <span className="commentName"> {whoAmI.firstName}  {whoAmI.lastName}</span>}
            
            <textarea className="commentBox" cols="30" rows="10"></textarea>
            <button className="commentBtn">Kommentera</button>
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