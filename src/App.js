import React, { useState } from 'react';

import Navbar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const [btntxt, setTxt] = useState("Dark Mode");

  const lightMode = () => {
    if (btntxt === "Dark Mode") {
      setMode('dark');
      setTxt('Light Mode');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    else if (btntxt === "Light Mode") {
      setMode('light');
      setTxt('Dark Mode');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (

    <>
    <div className="container my-3">
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} lightMode={lightMode} btntxt={btntxt} />
        
        <TextForm heading="Enter your text to analyze"/>

      </div>
    </>

  );
}

export default App;



