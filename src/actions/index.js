// To add different functionalities to our To-Do

// Add list item
export const addToDo = (data) =>{
    return {
        type: "Add_ToDo",
        payload:{
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

// Delete list item
export const deleteToDo = (id) =>{
    return {
        type: "Delete_ToDo",
        id
    }
}

// Remove All list items
export const RemoveToDo = () =>{
    return {
        type: "Remove_ToDo"
    }
}