import React from 'react'
import './display.css'
import {useDispatch, useSelector} from 'react-redux'
import { deleteToDo} from '../actions';


// To display list items on the screen
// Having a delete icon for each item to delete a particular list item

const Display = () => {
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.Reducer.list);
  
  return (
    <div className='display-list'>
    { 
            list.map((data)=>{
               return(
                <div className='list-element' key={data.id}>
                <h3>{data.data}</h3>
                <strong className='delete-button' title='Delete Item' onClick={()=> dispatch(deleteToDo(data.id))}>🗑</strong>
            </div>
               )
            })
           
          }
        
     </div>

  )
}

export default Display
