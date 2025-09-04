import React, { useEffect, useRef, useState } from 'react'

const Useeff = () => {
    const[value,setVal]=useState(0);
    const[color,setColor]=useState("yellow");
     const inputt =useRef(0);
    useEffect(()=>{
       inputt.current += 1;
    },[color]);

    const handleColor = () =>{
        if(color == 'blue'){
            setColor("yellow")
        }else{
            setColor("blue")
        }
    }
    
  return (
    <div style={{background:color}}>
       
        <p> {value}</p>
         <p>{inputt.current}</p>
        <button onClick={()=>setVal(value+1)}>click</button>
        <button onClick={handleColor}>{color}</button>
    </div>
  )
}

export default Useeff;