import "./App.css";
import { useState } from "react";
import FormText from "./components/FormText";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#002D62";
    } else {
      setMode("light");
      console.log("turing to light back");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
      {/* NavBar components */}
      <Navbar title="Text-Util" about="About" mode={mode} toggleMode={toggleMode} /> 

      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element = {<About />} />
          <Route exact path="/" element= {<FormText heading="Enter the text to Analyze below" mode={mode} />} />
        </Routes>
      </div>

      </Router>
    </>
  );
}

export default App;
