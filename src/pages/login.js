import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import GoogleClientLogin from '../pages/googleauth';

import "../pages/css/login.css";
import '../pages/css/googleauth.css';

// import { Redirect } from 'react-router';

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  //handle change in email input field
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  //handle change in email input field
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  //prevent default behaviour of button on click
  const onClickButton = (event) => {
    
    if (email && password) {
      const credentials = {
        email: email,
        password: password,
      };
      const headers = {
        "Content-type": "application/json",
      };

      // Login url by concatenating with the backend url
      const LOGIN_URL = "http://localhost:8080/users/login";
      axios.post(LOGIN_URL, credentials, { headers }).then((response) => {
        const { data } = response;
        console.log(data);

        if (data.status !== 200){ 
          alert(data.error) 
          return
        }
        else {
          setLoggedIn(true);
          localStorage.setItem("token", JSON.stringify(data.token));
          localStorage.setItem("email", JSON.stringify(email));
          
          history.push('/join')
        }

      });
      
    } 
    else {
      event.preventDefault();
      alert('Empty input fields')
    }
  };

  return (
    <div className="form_wrap">
      <div className="formrow">
        <h2>SIGN IN</h2>
        <form className="signIn">
          <input
            className="email"
            type="text"
            placeholder="Enter your email"
            onChange={onChangeEmail}
            required={true}
          />{" "}
          <br></br>
          <input
            className="password"
            type="password"
            placeholder="Enter your password"
            onChange={onChangePassword}
          />
          <br></br>
          <h5>
            Dont have an account? <a href="/">Sign Up</a>{" "}
          </h5>
          <Link >
            <button className="btnWrapp" type="submit" onClick={onClickButton}>
              Sign In
            </button>
          </Link>
        </form>
      </div>
      <div className='googleauth'>
        <GoogleClientLogin/>  
      </div>
        
    </div>
  );
};


export default Login;
