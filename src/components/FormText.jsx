import React, { useState } from "react";

const FormText = (props) => {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = () =>{
    setText("");
  };

  const handleCopyTextClick = () => {
     // Get the text field
    let copyText = document.getElementById("myBox");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const handleOnChange = (event) => { // this is must to write in order to update the text area
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
      <div className="mb-3">
        <h3> {props.heading} </h3>
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}
          value={text}
          onChange={handleOnChange} // this is must else we can't change the text in the box
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpperClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowerClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>
          Clear text
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleCopyTextClick}>
          Copy text
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleExtraSpacesClick}>
          Remove extra space
        </button>
      </div>
    </div>

    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text Summary</h2>
        <p> {text === "" ? 0 : text.split(" ").length} words and {text.length} characters</p>
        <p>{text === "" ? 0 : text.split(" ").length * 0.008} Minutes required to read this text</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in text box above to preview"}</p>
    </div>
    </>
  );
};

export default FormText;
