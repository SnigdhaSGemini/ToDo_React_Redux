import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import useRegex from '../CustomHooks/useRegex';
import useError from '../CustomHooks/useError';
import './login.css'
// Login Component
const Login = () => {

  // To set states of email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // To check if form is valid
    const [isvalid,setIsValid]=useState(false);

    // For navigation
    const history = useHistory();

    // Custom Hooks 
    // for regex check
    const regex = useRegex();
    // for error message display
    const [errorMsg,setError,error] = useError('');


// Called whenever there is some change in form values
    const submitForm= (e) =>{

     e.preventDefault();

    //  email check
        if (email.trim() === "") {
          setError('eemail');
          return;
        }
        else if (!regex.mailFormat.test(email)) {
          setError('email');
          return;
        }
              else if (password.trim() === "" ) {
                // password check
                setError('epassword');
                return;
              }
              else if ( !regex.passwordFormat.test(password)) {
                setError('password');
                return;
              }
              else{
                // if form is valid
                setError('');
                setIsValid(true);
          
    }
}

// to store user details in localstorage and to check if user is registered or not
// redirected to different paths based on registration
const navigate=()=>{
  const userLogin = JSON.parse(localStorage.getItem("userdata"));
  if (userLogin !== null) {
 
      let flag = 0;
      for (let i = 0; i < userLogin.length; i++) {
          if (userLogin[i].email === email.toLowerCase() && userLogin[i].password === password) {
              flag = 1;
              localStorage.setItem("userCredentials", JSON.stringify({
                  email: email,
                  password: password
              }))
              alert("Login Successful")
              history.push("/");
              break;
          }
      }
      console.log(flag);
      if(flag === 0  || localStorage === null){
          alert("Invalid Login Credentials");
          history.push("/register");
      }
     
            }
            else{
              alert("Please Register First!");
              history.push("/register");
            }
  
}

   
    

  return (
  <div className='login-div'>
    <h1>Login</h1>
    <form onChange={submitForm}>
        <div>
        <label htmlFor='email'>Email</label>
            <input type="text" name="email" id="email" onChange={(e)=> setEmail(e.target.value)}/>
            {(error === "eemail" || error === "email") && <p className="error"> {errorMsg} </p>}
        </div>
        <div>
            <label htmlFor='password'>Password</label>
            <input type="text" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
            {(error === "epassword" || error === "password") && <p className="error"> {errorMsg} </p>}
        </div> 
        <button className="login-button btn btn-warning" disabled={!isvalid} type='submit' onClick={navigate}>Login</button>
        <button className='link'><a href="#" onClick={() => { history.push('/register') }}>Not Registered Yet? Register Here</a></button>
        </form>
  </div>
  )
}

export default Login
