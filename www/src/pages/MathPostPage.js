import React,{useContext, useEffect, useState, useRef} from 'react'
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
import SendIcon from '@material-ui/icons/Send';
import CommentItem from '../components/CommentItem'

const MathPostPage = () => {

  const defaultIMG = "https://i.postimg.cc/RCj6Y344/New-Project-7.png"
  const { fetchPosts, posts, updatePost } = useContext(PostContext)
  const { users, fetchUsers, whoAmI } = useContext(UserContext);
  const history = useHistory();
  const { id } = useParams();
  const post = posts.find(p => p._id === id);
  const user = post && users.find(r => r._id === post.userID);
  const [likeCheck, setLikeCheck] = useState(false)
  const commentRef = useRef('');
  const dateToday = new Date();
  const getRegDate = dateToday.toLocaleString().substring(0, 16);
  

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
      setLikeCheck(true)
    } else {
      setLikeCheck(false);
    }

  };
 
  const addComment = () => {
    if (commentRef != null) {
      const commentObjBuild = {
      commentText: commentRef.current.value,
      commentBy: `${whoAmI.firstName} ${ whoAmI.lastName}`,
      commentDate: getRegDate,
      commentAvatar: whoAmI.profileImgURL,
      commentRole: whoAmI.roles
      }
      const commentObj = {
      comments: commentObjBuild
     
    }      
      updatePost(id, commentObj)
    }
    commentRef.current.value = '';
  }
  

  const addLike = () => {
    if (id && whoAmI && !post.likes.find(l => l._id === whoAmI._id)) {
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

  useEffect(() => {
    const postViewObj = {
      postViews: 1
    }
    updatePost(id, postViewObj);
  }, []);

  
  return (
    <div className="forumWrapper">

      {post && user &&  <div className="forumBoard" >
        <header className="forumHeader"><h3 onClick={() => history.push('/forum/matematik')} >Matematik / {post.title}</h3>
                <Tooltip title="SKAPA INLÄGG" arrow >
              <PostAddSharpIcon style={{cursor: "pointer"}} onClick={ () => history.push('/createPost')} />
            </Tooltip></header>

        <p className="topicTitle"> {post.title} {post.isPinned && <BookmarksSharpIcon color="primary" style={{fontSize: '17px'}} />} {post.isLocked && <LockSharpIcon color="error" style={{fontSize: '17px'}} />} <span style={{float: 'right', fontWeight: 'normal', fontSize: '18px'}}>besökare: {post.postViews}</span></p>
        <div className="postNameAndDate" onClick={ () => history.push('/users/' +post.userID)}  > {user.roles === 'Administator' ? <span className="postByName" style={{ color: 'red', fontWeight: 'bold' }}> {user.firstName}  {user.lastName}</span> :
          <span className="postByName">{user.firstName}  {user.lastName}</span>} <span>,
            {post.postedDate}</span>
          <Tooltip title={renderLikedUsers()} arrow >
            <span className="likes"> <span style={{fontSize: '17px', color: '#1a39e2'}}> { post.likes.length}</span> {whoAmI && likeCheck ? <ThumbUpOutlinedIcon style={{ fontSize: '17px', color: '6879d6' }} onClick={addLike} /> : <ThumbUpOutlinedIcon style={{ fontSize: '15px', color: '#1a39e2' }}   />} </span>
          </Tooltip>
        </div>

        <div className="postDivInfo" >
          <div className="imageCard" style={{position: 'relative', top: '-60px'}}>
            {post.userProfileAvatar ? <img className="profileIMG" src={post.userProfileAvatar} alt="" /> : <img className="defaultIMG" src={defaultIMG} alt="" />}
            {user.banTime ? <NotInterestedRoundedIcon fontSize="small" color="secondary" style={{ marginLeft: '-25px' }} /> : ''}
            {user.roles === 'Member' ? <p><CheckCircleRoundedIcon fontSize="small" /><span> {user.roles}</span></p> : <p><SecurityRoundedIcon color="error" fontSize="small" /><span> {user.roles}</span></p>}
          </div>
          
          <div className="postInfo">
            <div><p>{post.description}</p></div>
          </div>
          
        </div>
        <hr />
        {post.isLocked && <div>
          <p style={{ fontSize: '17px', borderRadius: '5px', padding: '6px', backgroundColor: 'rgb(143, 204, 224)'}}><LockSharpIcon style={{fontSize: '15px'}} color="error" /> Inlägget är <span style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>LÅST</span></p>
        </div>}

        <div>
          {post.comments.map(comment => {
            return <CommentItem comment={comment}/>
          })}
        </div>

        {!post.isLocked && <div className="underInfo">
          <div className="commentProfile">
            {whoAmI.profileImgURL ? <img className="profileIMG2" src={whoAmI.profileImgURL} alt="" /> : <img className="defaultIMG2" src={defaultIMG} alt="" />}
          </div>
          <textarea className="commentBox" cols="30" rows="10" placeholder=" skriv din kommentar här!" ref={commentRef}></textarea>
          <button className="commentBtn"><SendIcon onClick={addComment} color="inherit" /></button>
        </div>}
        <div style={{marginBottom: '10vh'}}></div>
          
        
      </div>}

      

      <div className="forumSideBoard">
        <h3 style={{textAlign: 'center', padding: '0', margin: '15px'}}>REKLAM</h3>
        <div style={{ height: 'fit-content'}}>
          <img src="https://i.postimg.cc/0jH8n61C/template.png" alt=""/>
        </div>
      </div>
  
    </div>

  );

}

export default MathPostPage;