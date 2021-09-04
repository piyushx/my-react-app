import React from 'react'

function Alert(props) {

    return (
        <>
        { props.Alertme &&  
        <div class="alert alert-success mb-0"  role="alert">
         <p> {props.Alertme.status} : {props.Alertme.message} </p> 
        </div>
        }
       
        </>
    )
}

export default Alert
