import React from "react";
import {Link} from 'react-router-dom'
  
const NavBar=(props)=>
{
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor: `${props.mode==="light"?"#e3f2fd":"black"}`}}>
    <div className="container-fluid">
      <Link className="navbar-brand" to = "/home" > {props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
       

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to ="/home" className="nav-link active"  >Home</Link>
                </li>
                <li className="nav-item">
                <Link to ="/about" className="nav-link">About</Link>
                </li>
            </ul>
            
            <div className="mx-1" onClick={()=> props.ChangeColor("green")} style={{backgroundColor: "green", padding:"10px", borderRadius: "3px"}}></div>
            <div className="mx-1" onClick={()=> props.ChangeColor("blue")} style={{backgroundColor: "blue", padding:"10px", borderRadius: "3px"}}></div>
            <div className="mx-1" onClick={()=> props.ChangeColor("white")} style={{backgroundColor: "white", padding:"10px", borderRadius: "3px"}}></div>
            
            
            <div class={`form-check form-switch mx-4 text-${props.mode==="dark"?"light":"dark"}`}>
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label class="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
            </div>
        </div>
        
    </div>
   

    
   </nav>
  )
}
  
export default NavBar;