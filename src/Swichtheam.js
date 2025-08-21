import React,{useState} from "react";

const Swichtheam = () => {
    const[mode,setMode]=useState(true)
  return (
    <div style={{background:mode?"white":"black",height:"100vh"}}>
     <button style={{color:mode?"black":"white", background:"transparent",border:"8px inset",borderRadius:"30px",padding:"10px",margin:"20px"}} 
      onClick={()=>setMode(!mode)}>Switch</button>
    </div>
  )
}

export default Swichtheam;