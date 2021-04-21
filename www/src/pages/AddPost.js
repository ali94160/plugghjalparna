import React, {useState, useRef} from 'react'
import '../style/AddPost.css';



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
      <h2>Create a Post</h2>
       <div className="rules">
        <ul>
          <li>EJ svordomar</li>
          <li>EJ Spam</li>
          <li>EJ annat språk</li>
        </ul>
      </div>

      <div className="formWrapper">
      <form onSubmit={submitHandler}>
      <h3>What type of recidense would you like to host?</h3>
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
        <textarea required  className="formTextBox" placeholder="Describe your residence..." name="w3review" rows="4" cols="50"></textarea>

        <button className="formBtn">Create Post</button>
        </form>
        </div>

     

    </div>
  );

}

export default AddPost;