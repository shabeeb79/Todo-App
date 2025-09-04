import React from 'react'

const Fetccc = ({values}) => {
  return (
    <>
        {
           
         values.map((items)=>(
            <ul key={items.id}>
               <li>{items.quote}</li>
            </ul>
           
         ))
        }
    </>
  )
}

export default Fetccc;