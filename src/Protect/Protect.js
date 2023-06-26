import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

// To prevent user to access homepage without login & unregistered user
function Protect(props) {
    const {Component} = props;
    const history = useHistory();
    useEffect(()=>{
        localStorage.getItem("userCredentials") === null ? history.push('/login') : history.push('/')
    })
  return (
    <>
    <Component/>
    </>
  )
}

export default Protect