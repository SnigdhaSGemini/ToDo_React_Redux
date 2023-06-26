import React, {useState} from 'react'
import './add.css'
import {useDispatch} from 'react-redux'
import { addToDo } from '../actions';
import useStore from '../CustomHooks/useStore';


//  To input & add new data in our list 

const Add = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const [resetList] = useStore([]);
  return (
    <div>
      <figure> <figcaption>Add Your List Here </figcaption></figure>
     
     <div className='add-items'>
      <input type='text' placeholder='Add Items' value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
      <i className='add-button' onClick={()=>{dispatch(addToDo(inputData),setInputData('')); resetList(inputData)}}>+</i>
     </div>
    </div>
  )
}

export default Add
