import React, { useState } from 'react'

const Addtask = ({additem}) => {
    const [value,setValue]=useState("")
    function addit(){
      additem(value)
      setValue("")
    };
  return (
    <>
        <div className='ADDtask'>
            <input id='addinput' value={value} type='text' placeholder='Add New Task...'
            onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={addit} id='addbutton'>ADD</button>
        </div>
    </>
  )
}

export default Addtask