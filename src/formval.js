import React, { useState } from 'react'

// import React from 'react'

const Formval = () => {
  const[valuee,setValue]=useState([])
  const[Error,setError]=useState("")
  function valuesget(e){
  const elements =[{name:e.target.value}]
   setValue(...valuee,elements)
   console.log(...valuee);
   
  
   
  }
  return (
    <>
    <form>
     <label htmlFor='FirstName'>FirstName</label>
     <input type='text' name="FirstName" placeholder='Enter..' onChange={valuesget}/>
     <label htmlFor='LastName'>LastName</label>
     <input type='text' placeholder='Enter..'/>
     <label htmlFor='Email'>Email</label>
     <input type='text' placeholder='Enter..'/>
     <label htmlFor='Password'>Password</label>
     <input type='text' placeholder='Enter..'/>
     <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Formval