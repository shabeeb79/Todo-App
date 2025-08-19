import React from "react";
import './items.css'
import Label from "./Label";
class Listitem extends React.Component{
    render(){
        const prop = this.props
        
        return(
        <div className='items'>
            <h1 className='head'>
                {prop.head}

            </h1>
            <p className='para'>
                {prop.para}

            </p>
            <label className="labell" htmlFor="suc">
               <Label isActive={prop.isActive} />
                </label>
        </div>
        )
    }
}
export default Listitem;