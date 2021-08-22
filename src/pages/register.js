/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { withRouter, Link,useHistory } from 'react-router-dom';
import axios from "axios";
import '../pages/css/register.css';
import '../pages/css/chat.css';
import '../pages/css/forms.css';
import '../pages/css/add.css';


const Register = () => {
    const history = useHistory();
    const [firstName, setfirstName] = useState(' ');
    const [lastName, setlastName] = useState(' ')
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ')
    
    const inputUpdate = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        switch(name){
            case "firstName":
                setfirstName(value);
                break;
            case "lastName":
                setlastName(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "email":
                setEmail(value);
                break;
            default:
                return
        }
    }

    const onClickButton = (event) => {
        if(!firstName || !lastName ||!email || !password){
            event.preventDefault()
        } else {
            const credentials = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            }
            const headers = {
                "Content-type": "application/json"
            }
            // Login url by concatenating with the backend url
            const REGISTER_URL =  "http://localhost:8080/users/register"; 
            axios.post(REGISTER_URL, credentials, {headers})
            .then(response =>{
                const {data} = response;

                if(data.status !== 200)
                alert(data.error)
            });

            history.push('/join');
        }
    }
    

        


    return (
        <div className="registerForm">

            <div className="form_wrap">
                <div className="formrows">
                <h2>SIGN UP</h2>
                <form className="">
                    <input className="firstName" type="text" name="firstName" placeholder="Enter your first name"  onChange={inputUpdate.bind(this)} required/> <br ></br>
                    <input className="lastName" type="text" name="lastName" placeholder="Enter your last name" onChange={inputUpdate.bind(this)} required/> <br ></br>
                    <input className="email" type="text" name="email" placeholder="Enter your email"  onChange={inputUpdate.bind(this)} required/> <br ></br>
                    <input className="password" name="password" type="password" placeholder="Enter your password"  onChange={inputUpdate.bind(this)} required/><br ></br>
                    <h5>Already have an account? <a href='/login'>Sign In</a> </h5>
                   
                    <Link> 
                        <button className="btnWrapp" type="submit"  onClick={onClickButton}>Sign Up</button>
                    </Link>
                    
                </form> 
           </div>
           
       </div>

        </div>
        )
    
    }



export default withRouter(Register);