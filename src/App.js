// import React, { useState } from 'react';
import { useEffect, useState } from "react";
// import { useState } from 'react';
import "./App.css";
import { cleanup } from "@testing-library/react";
// import Loggin from './components/Loggin';
// import Logout from './components/Logout';
// import Head from './header/header';
// import Section from './items.js';
// import Sectio from './components/section.js';
function App() {
  const [num , setNum] = useState(0);
  const [num1 , setNum1] = useState(0);
  const [color,setColor]=useState("white")
  // let arr=[
  //            {name:"A" ,place:"palakkad",age:29},
  //            {name:"B",place:"palakkad",age:30},
  //            {name:"C",place:"palakkad",age:31},
  //            {name:"D",place:"palakkad",age:32},
  //            {name:"E",place:"palakkad",age:33},
  //            {name:"F",place:"palakkad",age:34},
  //            {name:"G",place:"palakkad",age:35},
  //           ];
  //   const[current,setVal]=useState(10)
  //   let[color,setColor]=useState("white")
  // function adding(){
  //   return(
  //     setVal(current+1)
  //   )
  // }
  // function min(){
  //   return(
  //     setVal(current-1)
  //   )
  // }
  //  function data(e){
  //   console.log("" +e.target.value);

  //  }

  //     function green(){
  //       return(
  //       setColor(color="green")
  //       )
  //     }

  //     function red(){
  //       return(
  //      setColor(color="red")
  //       )
  //     }
  // const [log,setLog] = useState(false)
  // const logg =()=>{
  //   setLog(true);
  // }
  // const logout =()=>{
  //   setLog(false);

  // }
  // let [val,setVal] =useState(1)
  //   let [color,setColor] = useState("red")
  // const colorchange =(e)=>{
  //   setColor(e.target.value);
  // }
  // const[payment,setPayment]=useState("")
  //  function paymentseting(event){
  //    setPayment(event.target.value);
  //  }
  // const[gender,setGender]=useState("")
  // function genderselection(event){
  //    setGender(event.target.value);
  // }
  // const dark =()=>{
  //   setColor("black");
  //   setVal(val = 1);

  // }
  // const list =["apple","orange","banaba","subair"];

  //  const [rid,setId] = useState();
  //  const removv =(rid)=>{
  //   setId(arr.filter(user=> user.id!==rid))
  //  }
  // function formsub(e) {
  //   e.preventDefault();
  //   console.log("form submited");
  // }
  // const funn = (e) => {
  //   console.log(e.target.value);
  // };
  // const funny = (e) => {
  //   console.log(e.target.value);
  // };
      // useEffect(()=>{
      //   setColor("white")
      //    const id = setTimeout(()=>{
      //        setColor("blue")
      //     },num*1500)
      //    return (()=>{
      //      clearTimeout(id)
      //    })
      //  },[num])
      useEffect(()=>{
      console.log("shabeeb"+num)
      return (()=>{
        console.log(num);
        
      })
      },[num,num1])
  return (
    <div className="App">
   
      
     

      <p>{num}</p>
      <button onClick={()=>setNum(num+1)}>+</button>
    
      <p>{num1}</p>
      <button onClick={()=>setNum1(num1+1)}>+</button>
       {/* <div >
         {
         color&&num ?(
          <div style={{background:color,height:"80vh"}}>

          </div>
         ):null */}
         {/* } */}
       {/* </div> */}
   
      {/* >style={{backgroundColor:color,height:"100vh"}}> */}

      {/* {log?<Loggin />:<Logout />} */}
      {/* // <button onClick={val<=0?dark:white}>login</button> */}
      {/* <button onClick={dark}>logout</button> */}
      {/* //     < Head />
//     <div style={{background:color, border:"1px solid "}}>
//     <h1>{current}</h1>
//     <button onClick={adding}>add</button>
//       <button onClick={min}>minize</button>
//       </div>
//       <button onClick={green}>green</button>
//       <button onClick={red}>red</button> */}
      {/* < Section /> */}
      {/* <Sectio  val= {arr} /> */}
      {/* <div className='footer'>footer</div> */}

      {/* {
 
        list.map((item,k)=>(
          <ul key={k}>
         
          
            <li>{item}</li>   
           </ul>
        ))
       
     } */}
      {/*  {*/}
      {/* // arr.map((user)=>(
        
      //      <ul key={user.id}>
      //       <li>{user.id}</li>
      //       <li>{user.title}</li>
      //       <li>{user.body}</li>
      //       <hr></hr>       
      //           </ul>
          
      // ))
     
    //  } */}
      {/* <form> */}

      {/* <button onClick={removv}>submit</button>
     </form> */}
      {/* <button onClick= {()=>colorchange("red")}/> */}
      {/* <input type='text' value={color} onChange={colorchange}/>
    // <div style={{background:color,height:"100vh",border:"10px solid blackre"}}>{color}</div>*/}
      {/* <select value={payment} onChange={paymentseting}>
      <option selected>select your payment</option>
      <option value="amazon pay"></option>
      <option value="razor pay"></option>
      <option value="gift pay"></option>
      <option value="kuninj pay"></option>
    </select>
    <p>payment method:{payment}</p>*/}
      {/* <label>male
       <input type='radio' value="male" checked={gender==="male"} onChange={genderselection}/>
    </label>
    
     <label>female
     <input type='radio' value="female" checked={gender==="female"} onChange={genderselection}/>
     </label>
       <p> {gender}</p> */}
      {/* // <form onSubmit={formsub}>
      //   <input type="text" onChange={funn} />
      //   <select onChange={funny}>
      //     <option value="selected-male">male</option>
      //     <option value="selected-female">female</option>
      //   </select>
      //   <button type="submit">submit</button>
      // </form> */}
    </div>
  )
}

export default App;
