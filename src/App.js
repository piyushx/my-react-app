import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alerts from './components/alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
  <Router>
     < NavBar title = "My react App!" mode = {mode} color = {white} ChangeColor = {ChangeColor} toggleMode ={toggleMode} />
     <Alerts Alertme = {Alert}/>
    <Switch>
          <Route path="/about">
               <About mode = {mode} />
          </Route>

          <Route path="/">
              < TextForm mode = {mode} color = {white} Alertme = {Alert} AlertFunction = {showAlert} />
          </Route>
    </Switch>
  </Router>

  );
}

export default App;
