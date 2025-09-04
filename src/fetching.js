

import { useEffect, useState } from "react";
import Fetccc from "./fetccc";
// import axios from "axios";



const Fetching = () => {
  const[val,setVal]=useState([])
  useEffect(()=>{
    
      
      fetch("https://dummyjson.com/quotes")
      .then((data)=>data.json())
      .then((responce)=>setVal(responce.quotes.slice(0,10)))
      .catch(err=>console.log(err));
        
      
    
  },[])
      
    
  return (
    
  <div>
    {
      <Fetccc values={val}/>
      // val.map((items)=>(
      //       <div key={items.id}>
      //           <h1>{items.id}{items.quote}</h1>
      //       </div>

      //   ))
      
    }
    </div>
    
  )
}

export default Fetching;