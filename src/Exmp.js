import React, { useState } from 'react'
import Addexmp from './Addexmp'
import Removeexmp from './Removeexmp'

const Exmp = () => {
   const[task,setTask]=useState([])
    function additem(item){
      const neww =[...task,{item}]
      setTask(neww)
    }
    function remove(index){
      neww=[...task]
      neww.splice(index,1)
      setTask(neww)
    }
  return (
    <>
      <div className='container'>
            <div className='add'>
          <Addexmp additem={additem}/>
        </div>
        <div className='list'>
         <Removeexmp remove={remove} index=/>
        </div>
     </div>
    </>
  )
}

export default Exmp