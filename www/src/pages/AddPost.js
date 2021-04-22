import React, {useState, useRef} from 'react'
import '../style/AddPost.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';



const AddPost = () => {

  const [subject, setSubject] = useState();

  const title = useRef(null);

  const changeOptionHandler = (e) => {
    setSubject(e.target.value);
  }


  const submitHandler = (e) => {
    e.preventDefault();



  }



  return (
    <div className="addPost">
      <div className="formWrapper">
        <form onSubmit={submitHandler}>
          <div className="postSetting">
              <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox color="secondary" />}
          label="Lås"
          labelPlacement="top"
        />
         <FormControlLabel
          value="top"
          control={<Checkbox color="primary" />}
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
        <option >Kemi</option>
        <option >Fysik</option>
        <option >Biologi</option>
        <option >Historia</option>
          <option >Nyheter</option>
          <option >IT-Support</option>
      </select>
        
          <p className="formTitle">Titel</p>
       
          <input required ref={title} className="inputTitle" type="text" placeholder="T.ex [Hjälp] ekvationen 5y+x(5+43)..." />
        
        <p>Beskrivning</p> 
        <textarea required  className="formTextBox" placeholder="Skriv något här..." name="w3review" rows="6" cols="100"></textarea>

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