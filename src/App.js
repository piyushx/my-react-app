import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alerts from './components/alert';




function App() {

  const [mode, setmode] = useState("light");


  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      showAlert("Dark Mode has been enabled!", "Success")
    } else {
      setmode("light");
      showAlert("Light Mode has been enabled!", "Success")
    }
  }

  const [Alert, setAlert] = useState(null)

  const showAlert = (msg, status) => {
    setAlert({
      message : msg,
      status: status
    })


  }

  setTimeout(() => {
    setAlert(null)
  }, 5000);

  const [white, setwhite] = useState("white")

  const ChangeColor = (colorName) => {
    setwhite(colorName);
  }

  return (
    <>
     < NavBar title = "My react App!" mode = {mode} color = {white} ChangeColor = {ChangeColor} toggleMode ={toggleMode} />
     <Alerts Alertme = {Alert} />
    < TextForm mode = {mode} color = {white} Alertme = {Alert} AlertFunction = {showAlert} />
    </>
  );
}

export default App;
