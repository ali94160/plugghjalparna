import React, {useState, useRef, useContext} from 'react'
import '../style/AddPost.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { UserContext } from '../contexts/UserContextProvider'
import { PostContext } from '../contexts/PostContextProvider'
import { useHistory } from 'react-router-dom'


const AddPost = () => {

  const history = useHistory();

 const { fetchPosts } = useContext(PostContext)
  const dateToday = new Date();
  const getRegDate = dateToday.toLocaleString().substring(0, 16);
  const { whoAmI, updateUser } = useContext(UserContext);
  const { addPost } = useContext(PostContext)
  const [subject, setSubject] = useState();
  const [locked, setLocked] = useState(false);
  const [pinned, setPinned] = useState(false);

  const title = useRef();
  const descRef = useRef();

  const lockPostHandler = () => {
    locked === false ? setLocked(true) : setLocked(false);
  }

  const pinPostHandler = () => {
    pinned === false ? setPinned(true) : setPinned(false)
  
  }

  const changeOptionHandler = (e) => {
    setSubject(e.target.value);
  }


  const submitHandler = (e) => {
    e.preventDefault();

    const post = {
      userID: whoAmI._id,
      postedByName: whoAmI.firstName,
      postedByLastName: whoAmI.lastName,
      userRole: whoAmI.roles,
      userProfileAvatar: whoAmI.profileImgURL,
      title: title.current.value,
      description: descRef.current.value,
      postedDate: getRegDate,
      postViews: 0,
      subForum: subject,
      likes: [],
      isPinned: pinned,
      isLocked: locked,
      comments: []
    }

    let post2 = {

      myPosts: post
    }
    
    addPost(post);
    updateUser(whoAmI._id , post2);
    history.push('/forum')
    fetchPosts();
  }



  return (
    <div className="addPost">
      <div className="formWrapper">
        <form onSubmit={submitHandler}>
          <div className="postSetting">
              <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
          <FormControlLabel
           
                    
                  control={<Checkbox color="secondary"
                    onClick={lockPostHandler}
                    value={locked}
          />}
          label="Lås"
          labelPlacement="top"
        />
          <FormControlLabel
          
                  control={<Checkbox color="primary"
                    onClick={pinPostHandler}
                    value={pinned}
                />}
          label="Pinna"
          labelPlacement="top"
        />      
      </FormGroup>
    </FormControl>
          </div>
      <h3> Vilket ämne ska inlägget publiceras?</h3>
      <select value={subject} onChange={changeOptionHandler} required className="optionBar" >
        <option defaultValue="DEFAULT" disabled="disabled" >Subject?</option>
        <option>Allmänt</option>
        <option >Matematik</option>
        <option >Svenska</option>
        <option >Engelska</option>
          <option >Nyheter</option>
      </select>
        
          <p className="formTitle">Titel</p>
       
          <input required ref={title} className="inputTitle" type="text" placeholder="T.ex [Hjälp] ekvationen 5y+x(5+43)..." />
        
        <p>Beskrivning</p> 
        <textarea required ref={descRef} className="formTextBox" placeholder="Skriv något här..." name="w3review" rows="6" cols="100"></textarea>

        <button className="formBtn">Create Post</button>
        </form>
      </div>
      <div className="rules">
        <p>Regler av Inlägg</p>
        <ul>
          <span style={{fontSize: 18, fontWeight: 'bolder', color: 'darkred'}}>Förbjudet att:</span>
          <li>Spamma inlägg</li>
          <li>Annan marknadsföring</li>
          <li>Rasism</li>
          <li>Ovårdat språk</li>
          <li>Mobbning och uthängning</li>
          <li>18+ material</li>
          <br></br>
          <li>Genom att skapa inlägget godkänner du regler och villkor inom PluggHjälparna.
          Vid regelbrott har vi rätten till att banna användaren eller ta bort inlägg.
          </li>
          <br/>
          <li>Vid frågor vänligen kontakta vår Support.</li>
        </ul>
      </div>
      

     

    </div>
  );

}

export default AddPost;