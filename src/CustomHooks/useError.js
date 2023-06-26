import { useState} from 'react'
// Custom Hook - to set respective error messages on input fields
const useError = (Initialerr) => {
    const [error,setError]=useState(Initialerr);
    const reset = (initial)=>{
        setError(initial);
    }
    switch(error){
        case   "eemail":
            return ["Please enter your email", reset ,error] 
        case "email":
            return ["Please enter valid email", reset ,error] 
        case   "ename":
            return ["Please enter your name", reset ,error] 
        case "name":
           return ["Please enter valid name", reset ,error] 
        case   "enumber":
            return ["Please enter your number", reset ,error] 
        case "number":
            return ["Please enter valid number", reset ,error] 
        case   "epassword":
            return ["Please enter your password", reset ,error] 
        case "password":
            return ["Please enter valid password", reset ,error] 
        default:
            return ["", reset ,error] 
    }
}

export default useError
