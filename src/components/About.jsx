import React, { useState } from "react";

const About = () => {

    const [myStyle, setmyStyle] = useState({
        color : "black",
        backgroundColor: "white"
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if(myStyle.color === 'black'){
            setmyStyle({
                color : "white",
                backgroundColor: "black",
                border: "1px solid white"
            })
            setBtnText("Enable White Mode");
        }else{
            setmyStyle({
                color : "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Dark Mode");
        }
    }

  return (
    <div className="container" style={myStyle}>
        {/* <h1 className="my-3">About me</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
        
      <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
      </div> */}
      <h2>Overview</h2>
      <p>🖥️ Compatible with your device ✅</p>
      <p>Various text utilities to help with daily tasks and improve your productivity.</p>
      <p>🚀 A quick and handy shortcut for various free text utilities to help with daily tasks and improve your productivity.</p>  
      <p>⚡Text-Utils.com provides tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others.</p>
      <p>🔥 See some of our text utilities below:</p>

      <ul>
        <li>Remove special characters</li>
        <li>Remove accents</li>
        <li>Remove line breaks</li>
        <li>Remove duplicate lines</li>
        <li>Remove lines containing</li>
        <li>Extract emails from text</li>
        <li>Extract numbers from text</li>
        <li>Extract URLs from text</li>
        <li>Extract IP addresses from text</li>
        <li>Extract hashtags from text</li>
      </ul> 

    </div>
  );
};

export default About;
