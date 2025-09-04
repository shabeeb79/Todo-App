import React, { useState } from 'react'

const Usesttt = () => {
    const[value,setVal]=useState(0)
    const[color,setColor]=useState("")

  return (
    <div>
        <p style={{color:color}}>{value}</p>
        <button onClick={()=>setVal(value+1)}>click</button>
        <input type='text' onChange={(e)=>setColor(e.target.value)}/>
    </div>
  )
}

export default Usesttt;