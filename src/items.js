import React from "react";
import Listitem from "./listtt";
// import Label from "./Label";
const arr=[{
  head:"sha",
  para:"hey alllllllll",
  isActive:false
},
{
  head:"sha",
  para:"hey alllllllll",
  isActive:false
},{
  head:"sha",
  para:"hey alllllllll",
  isActive:true
}];
class Section extends React.Component{
    render(){
        return(
   <div className='section'>
    {
    arr.map((obj)=>{
       return< Listitem head ={obj.head} para={obj.para} isActive={obj.isActive}/>
    })
    }
   
    </div>
        )
    }
}
export default Section;
