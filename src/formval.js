import React, { useState } from 'react'

const Formval = () => {
    const[name,setValue]=useState({})
    const[error,setError]=useState({})
    
    function names(e){
        setValue({...name,[e.target.name]:e.target.value})
    }
    function errors(){
        const err ={}
        if(!name.FirstName){
          err.FirstName="name is required";
        }else if(name.FirstName.length>6){
            err.FirstName="name must be 6 letters";
        }

          if(!name.LastName){
          err.LastName="name is required";
        }else if(name.LastName.length>6){
            err.LastName="name must be 6 letters";
        }
            if(!name.Email){
          err.Email="name is required";
        }else if(name.Email.includes(!/\S+@\S+\.\S+/)){
            err.Email="must be need characters";
        }
        return err;
    } 
    function sumbitting(e){
    e.preventDefault();
    const validateErr = errors();
    setError(validateErr);
    
    if(Object.keys(validateErr).length===0){
        alert("submitted")
    }
    }
  return (
    <div>
    <form onSubmit={sumbitting}>
    <label htmlFor='FirstName' >FirstName</label>
    <input type='text' value={FirstName} onChange={names}/>
    <label htmlFor='LastName'>LastName</label>
    <input type='text' value={LastName} onChange={names}/>
    <label htmlFor='email'>Email</label>
    <input type='text' value={Email} onChange={names}/>
    <button type='submit'>Submit</button>
    </form>
  

    </div>
  )
}

export default Formval;