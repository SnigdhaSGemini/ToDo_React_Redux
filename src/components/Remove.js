import React from 'react'
import './remove.css'
import {useDispatch} from 'react-redux'
import {RemoveToDo} from '../actions';

// To remove all list items / to clear the list
const Remove = () => {
    const dispatch = useDispatch();
  return (
    <div className='remove-all'>
    <button className='btn btn-danger' data-sm-link-text="Remove All" onClick={()=> dispatch(RemoveToDo())}> <span>Check List</span></button>
 </div>
  )
}

export default Remove
