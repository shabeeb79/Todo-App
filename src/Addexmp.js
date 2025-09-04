import React,{useState} from 'react'

const Addexmp = ({additem}) => {
  const[val,setVal]=useState("")
   function add(){
    additem(val)
    setVal("")
   }

  
  return (
    <div>
        <input type='text' value={val} onChange={(e)=>setVal(e.target.value)} />
        <button onClick={add}/>
    </div>
  )
}

export default Addexmp