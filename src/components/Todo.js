import React  from 'react'
import './todo.css'
import Add from './Add';
import Display from './Display';
import Remove from './Remove';

// To Do Component
const Todo = () => {
 
  return (
    <>
    <div className='main-div'>
    <div className='child-div'>
    
     <Add />
     <Display/>
     <Remove/>
    </div>
  </div>
    </>
  )
}

export default Todo
