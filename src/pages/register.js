import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import axios from "axios";
// import './register.css';
import '../pages/css/chat.css';
import '../pages/css/forms.css';
import '../pages/css/add.css';
// import './grid.css';

const initialState = {
    password: '',
    firstName: '',
    lastName: '',
    email: '',
}

class Register extends Component {

    constructor() {
        super();
        this.state = {
            ...initialState
        }
    }

    clearForm() {
        this.setState({
            ...initialState
        });
    }

    inputUpdate(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    
    

    

    render(){

        const { firstName } = this.state;
        const { lastName } = this.state;
        const { email } = this.state;
        const { password } = this.state;


        return (
            <div className="registerForm">

                <div className="form_wrap">
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
                    
                </div>

            </div>
        )
    }
}

export default withRouter(Register);