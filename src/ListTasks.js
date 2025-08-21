import React from 'react'

const ListTasks = ({task,index,removeitem}) => {
  return (
    <>
    <div className='lists'>{task.title}
      <button onClick={()=>removeitem(index)} className='delet'>Delete</button>
    </div>
    </>
  )
}

export default ListTasks;