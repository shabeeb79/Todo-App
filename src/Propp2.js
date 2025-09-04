import React from 'react'

 const Propp2 = ({value}) => {
  return (
    <div>
        {
            value.map(item=>(
                <ul>
                <li>
                    {item.id}
                </li>
                </ul>
            ))
        }
    </div>
  )
}
export default Propp2;