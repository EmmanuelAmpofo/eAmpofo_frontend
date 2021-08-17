import React, { Component, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from "axios";
import '../pages/css/register.css';
import '../pages/css/chat.css';
import '../pages/css/forms.css';
import '../pages/css/add.css';
// import './grid.css';

// const initialState = {
//     password: '',
//     firstName: '',
//     lastName: '',
//     email: '',
// }

const Register = () => {
    // const clearForm =() => {
    //     this.setState({
    //         ...initialState
    //     });
    // }

    // const inputUpdate = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    
    const [firstName, setfirstName] = useState(' ');
    const [lastName, setlastName] = useState(' ')
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ')
    

    const onClickButton = (event) => {
        if(!firstName || !lastName || !email || !password){
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
            const REGISTER_URL =  "/users/register"; 
            axios.post(REGISTER_URL, credentials, {headers})
            .then(response =>{
                const {data} = response;
                console.log(data)

                if(data.status !== 200)
                alert(data.error)
                else{
                    // setLoggedIn(true);
                    localStorage.setItem("token",   JSON.stringify(data.token))
                }
            });
        }
    }
    

         // const { firstName } = this.state;
        // const { lastName } = this.state;
        // const { email } = this.state;
        // const { password } = this.state;


    return (
        <div className="registerForm">

            {/* <div className="form_wrap">
                <div className="form_row">
                    <div className="form_item">
                        <div className="form_input">
                            <input type="text" placeholder="First Name" autoComplete="off" name="firstName" value={firstName} onChange={this.inputUpdate.bind(this)} required/>
                            <span className="bottom_border"></span>
                            <input type="text" placeholder="Last Name" autoComplete="off" name="lastName" value={lastName} onChange={this.inputUpdate.bind(this)} required/>
                            <span className="bottom_border"></span>
                            <input type="email" placeholder="Email" autoComplete="off" name="email" value={email} onChange={this.inputUpdate.bind(this)} required/>
                            <span className="bottom_border"></span>
                            <input type="password" placeholder="Password" autoComplete="off" name="password" value={password} onChange={this.inputUpdate.bind(this)} required/>
                            <span className="bottom_border"></span>
                        </div>
                    </div>
                </div>
                    
                    <button onClick={() => this.register()} className="btn">
                         Register
                    </button>
                    
            </div> */}
            <div className="form_wrap">
                <div className="formrows">
                <h2>SIGN UP</h2>
                <form className="">
                    <input className="firstName" type="text" placeholder="Enter your first name"  required/> <br ></br>
                    <input className="lastName" type="text" placeholder="Enter your last name"  required/> <br ></br>
                    <input className="email" type="text" placeholder="Enter your email"  required/> <br ></br>
                    <input className="password" type="password" placeholder="Enter your password"  required/><br ></br>
                    <h5>Already have an account? <a href='/login'>Sign In</a> </h5>
                   
                    <Link to='/join' onClick={onClickButton}> 
                    <button className="btnWrapp" type="submit" >Sign Up</button>
                    </Link>
                    
                </form> 
           </div>
           {/* <Route exact path="/">
            {loggedIn ? <Redirect to="/join" /> : null}
            </Route> */}
       </div>

        </div>
        )
    
    }



export default withRouter(Register);