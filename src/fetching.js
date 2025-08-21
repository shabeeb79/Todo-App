

import { useEffect, useState } from "react";
import axios from "axios";



const Fetching = () => {
  const[val,setVal]=useState([])
  useEffect(()=>{
  async function fetc() {
    
    
      try{
      const data ="https://dummyjson.com/quotes";
      const responce = await axios.get(data);
      const vall = responce.data
      setVal(vall.quotes.slice(0,10))
      }
      catch(err){
        console.log(err);
        
      }
    }
  
      fetc()
  },[])
      
    
  return (
    
  <div>
    {
      
      val.map((items)=>(
            <div key={items.id}>
                <p>{items.id}{items.quote}</p>
            </div>

        ))
      
    }
    </div>
    
  )
}

export default Fetching;