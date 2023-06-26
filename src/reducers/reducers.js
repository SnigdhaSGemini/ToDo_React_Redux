const initialData = {
   
    list: localStorage === null ? [] : JSON.parse(localStorage.getItem("list"))[0].list 
}
const Reducer = (state=initialData,action) =>{
 switch(action.type){
    case "Add_ToDo" :
        const {id,data} = action.payload;
        return{
            ... state,
            list:[
                ... state.list,
                {
                    id:id,
                    data:data
            }
        ]
        } 
        case "Delete_ToDo" :
           const list1 = state.list.filter((data)=> data.id != action.id);
            return{
                ... state,
                list:list1
            } 

        case "Remove_ToDo" :
            return{
                ... state,
                list: []
            }
        default: return state;
 }
}

export default Reducer;