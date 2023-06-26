import React, { useState } from 'react'
import './register.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useRegex from '../CustomHooks/useRegex';
import useError from '../CustomHooks/useError';

// Registration Component
const Register = () => {
  // to set states of input fields
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [password,setPassword] = useState('');

     // To check if form is valid
    const [isvalid,setIsValid]=useState(false);

    // To fetch and change data in localstorage
    const [records, setRecords] = useState(JSON.parse(localStorage.getItem("userdata")) || []);

       // For navigation
    const history = useHistory();

     // Custom Hooks 
    // for regex check
    const regex = useRegex();
    // for error message display
    const [errorMsg,setError,error] = useError('');

    // Called whenever there is some change in form values
    const submitForm=(e) => {
        e.preventDefault();
       
        // name check
        if(name.trim() === ""){
            setError('ename');
            return;
          }
          else if(!regex.nameFormat.test(name)){
            setError('name');
            return;
          }
         else if (email.trim() === "") {
          // email check
            setError('eemail');
            return;
          }
          else if (!regex.mailFormat.test(email)) {
            setError('email');
            return;
          }
         
         else if(number.trim() === ""){
          // number check
            setError('enumber');
            return;
          }
          else if(!regex.numberFormat.test(number)){
            setError('number');
            return;
          }
          
        else if (password.trim() === "") {
          // password check
            setError('epassword');
            return;
          }
          else if (!regex.passwordFormat.test(password)) {
            setError('password');
            return;
          }
         
        else{  // if form is valid
          setError('');
            setIsValid(true);
           
        }

    }

    // To check if user is registered or not; if not; register and store data in localstorage
    // redirected to different paths based on registration
    const navigate = () =>{
      // new object for new data entry
      const objRecord = {
        name: name.toLowerCase(),
        email: email.toLowerCase(),
        password: password,
        number: number,
        list: []
      }
      if(regex.nameFormat.test(name) && regex.mailFormat.test(email) && regex.numberFormat.test(number) && regex.passwordFormat.test(password)){
        setError('');
      }
      let flag = 0;
      console.log(records.length);
      for (let i = 0; i < records.length; i++) {
        if (records[i].email.toLowerCase() === email.toLowerCase()) {
          alert("User Already Registered");
          history.push("/")
          flag = 1;
        }
      }
      if (flag === 0) {
        records.push(objRecord);
        setRecords(records);
        console.log(records);
        localStorage.setItem("userdata", JSON.stringify(records));
        alert("User Registered Successfully!!")
        history.push("/")
      }
    }
  return (
    <div className='register-div'>
    <h1>Register</h1>
    <form onChange={submitForm}>
        <div>
            <label htmlFor='username'>Username</label>
            <input type="text" name="username" id="username" onChange={(e)=> setName(e.target.value)}/>
            {(error === "ename" || error === "name") && <p className="error"> {errorMsg} </p>}
        </div> 
        <div>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
            {(error === "eemail" || error === "email") && <p className="error"> {errorMsg} </p>}
        </div> 
        <div>
            <label htmlFor='number'>Number</label>
            <input type="text" name="number" id="number" onChange={(e)=> setNumber(e.target.value)}/>
            {(error === "enumber" || error === "number") && <p className="error"> {errorMsg} </p>}
        </div> 
        <div>
            <label htmlFor='password'>Password</label>
            <input type="text" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
            {(error === "epassword" || error === "password") && <p className="error"> {errorMsg} </p>}
           
        </div> 
        <button className='register-button btn btn-warning' disabled={!isvalid} type='submit' onClick={navigate}>Register</button>
        <button className='link'><a onClick={() => {history.push('/login')}}>Already Registered ? LogIn</a></button>
    </form>
    </div>
  )
}

export default Register
