import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import axios from "axios";
import './register.css';

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

        const { name } = this.state;

        return (
            <div className="registerForm">

                <div className="form_wrap">
                    <div className="form_row">
                        <div className="form_item">
                            <div className="form_input">
                                <input type="text" placeholder="First Name" autoComplete="off" name="name" value={name} onChange={this.inputUpdate.bind(this)} required/>
                                <span className="bottom_border"></span>
                                <input type="text" placeholder="Last Name" autoComplete="off" name="name" value={name} onChange={this.inputUpdate.bind(this)} required/>
                                <span className="bottom_border"></span>
                                <input type="email" placeholder="Email" autoComplete="off" name="name" value={name} onChange={this.inputUpdate.bind(this)} required/>
                                <span className="bottom_border"></span>
                                <input type="password" placeholder="Password" autoComplete="off" name="name" value={name} onChange={this.inputUpdate.bind(this)} required/>
                                <span className="bottom_border"></span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="form_row">
                        <div className="form_item">
                            <div className="form_select">
                                <select name="group" onChange={this.inputUpdate.bind(this)}>
                                    <option value="">Please select a group</option>
                                    <option value="React JS">React JS</option>
                                    <option value="Node JS">Node JS</option>
                                </select>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div> */}
                        <button onClick={() => this.register()} className="btn">
                            Register
                        </button>
                    
                </div>

            </div>
        )
    }
}

export default withRouter(Register);