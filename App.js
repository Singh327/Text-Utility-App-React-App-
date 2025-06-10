import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(2, 25, 67)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title='TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //    document.title='Install TextUtils now'
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> } />

        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
