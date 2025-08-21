import React, { useState } from 'react'
import "./Todo.css"
import Addtask from './Addtask'
import ListTasks from './ListTasks'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav';
const Todo = () => {
  const[task,setTask]=useState([])
  const additem = (title)=>{
  const newTask =[...task,{title}]
  setTask(newTask)
  }
  const removeitem=(index)=>{
    const newTask=[...task]
    newTask.splice(index,1);
    setTask(newTask)
  }
  return (
    <>
    <div className='container'>
      <Nav/>
      <div className='header'>TODO LIST</div>
      <div className='Add-list'>
        <Addtask additem={additem}/>
      </div>
      <div className='Listitems'>
        {task.map((task,index)=>(
          <ListTasks task={task} removeitem={removeitem} index={index}/>
        ))}
        
      </div>
    </div>
    </>
  )
}

export default Todo;