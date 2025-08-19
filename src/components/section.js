import React from 'react'

let Sectio = ({val}) => {
  return (
   <>
   { val.map((value)=>(
        
   <div className="sec" style={{background:"white",color:"black"}}>
        <h3>name:{value.name}</h3>
        <h5>place:{value.place}</h5>
        <p>age:{value.age}</p>
    </div>
    ))
}</>
  );
};

export default Sectio;