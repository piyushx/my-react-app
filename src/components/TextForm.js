import React,{useState} from "react";


const TextForm = (props) => {
    const [value, setvalue] = useState("Enter Text")
  

    

    const TextOnChange = (event)=> {
        setvalue(event.target.value)
       
    }

    const ToUpperCase  = ()=> {
        var UpperCase = value.toUpperCase();
        setvalue(UpperCase)
        props.AlertFunction("Text has been changed to upper case", "Success")
    }

    const ToLowerCase  = ()=> {
        var LowerCase = value.toLowerCase();
        setvalue(LowerCase)
        props.AlertFunction("Text has been changed to Lower case", "Success")
    }

    const CLearText  = ()=> {

        setvalue("")
        props.AlertFunction("Text has been cleared", "Success")
    }

    const RemoveSpace  = ()=> {
        var UpperCase = value.replaceAll(" ", "");
        setvalue(UpperCase)
        props.AlertFunction("Spaces have veeb", "Success")
    }


    const Jumbo = ()=> {
        var flip = '';
        for (var i = 0; i < value.length; i++) {
          if(Math.random() > .5){
            flip = flip + value.charAt(i).toUpperCase();
          } else {
            flip = flip + value.charAt(i).toLowerCase();
          }
        }

        setvalue(flip)
    }

    const [mode, darkmode] = useState("light")
    const [fontmode, darkfont] = useState("black")

    const DarkModel = ()=> {
        if (mode === "light") {
            darkmode("dark")
            darkfont("white")
        } else {
            darkmode("light")
            darkfont("black")
        }
    }

    return (
        <>
        
         <div className = {`"mb-0 `} style={{height: "100vh", background: props.mode==="dark"?"#272e45":`${props.color}` }}>
             <div className="container">
                <div className={`"container text-${props.mode==="dark"?"light":`${props.color==="white"?"black":"white"}`} "`}>

                <h2 className="py-4">Enter Text: </h2>
                <textarea className="form-control my-3 " style={{background: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":`${props.color==="white"?"black":"white"}` }}  rows="8" value= {value} onChange={TextOnChange}></textarea>
                <button type="button"  className="btn btn-primary my-3 mx-2" onClick= {ToUpperCase}>Upper Case</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick= {ToLowerCase}>Lower Case</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick= {CLearText}>Clear Text</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick= {RemoveSpace}>Remove Spaces</button>
                <button type="button" className="btn btn-primary my-3 mx-2" onClick= {Jumbo}>MaKe It LiKe ThIs</button>
             </div>

            <div className={`container text-${props.mode==="dark"?"light":`${props.color==="white"?"black":"white"}`} "} `}>
                <h3>Preview Text:</h3>
                <p>{value}</p>
                <p><strong> {0.008 * value.split(" ").length} Minutes to read</strong> </p>
                <p>{value.split(" ").length-1} words and {value.length} characters</p>
            </div>
            <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick = {DarkModel}>Dark Mode</button>
            </div>
         </div>
             </div>
             

         </>
    )
}

export default TextForm;