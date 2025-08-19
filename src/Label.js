import React from "react";
import './items.css';
import './items'
 function Label(proo){
    const style =proo.isActive?{background:"green"}:{background:"blue"};
    return(
     <span className="label" style={style}>Label</span>

    )
 }
 export default Label;