import {useState} from 'react'

// To store list items in localstorage so that its data dont get dissappeared on route switch
const useStore = (initialInput) => {
    
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem("list")) || []);
    
    const [store,setStore]=useState(initialInput);
    const reset = (initial)=>{
        store.push(initial);
        setStore(store);
        const listRecord = {
            id: 0,
            list: store
        }
       if(records.length===0){   records.push(listRecord);}
        records[0] = listRecord;
        setRecords(records);
        
    localStorage.setItem("list",JSON.stringify(records));
    }
    
  

    
  
  return [reset]
}

export default useStore
