import React, { Component } from 'react';
import socket from 'socket.io-client';
class ActiveUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: props.users,
        }
    }

    // Search functionality
    inputUpdate(e) {
        const value = e.target.value;
        const foundUsers = this.props.users.filter(user =>{
            return user.email.includes(value);
        })
        this.setState({
            ...this.state,
            users: foundUsers
        })
    }
    joinUser(secondUserEmail){
        const mainUserEmail = JSON.parse(localStorage.getItem("email"));
        const params = {
            name: mainUserEmail,
            room: secondUserEmail
        }
        socket.emit('join', params, function (err) {
            
            if (err) {
                this.props.history.push('/');
            }
        });
    }
    componentDidUpdate(){
        if(this.state.users.length <= 0){
            // this.state.users = this.props.users
            this.setState({
                ...this.state,
                users: this.props.users
            })
        }
    }
    render() {

        return (
            <div className="activeUsers">
                <h2 className="headline">
                    Active users
                </h2>
                <div id="users">
                    <ul>
                        {this.state.users.map((user, index) => (
                            <li key={index}>
                                <button onClick={this.joinUser.bind(user.email)}>
                                    {user.firstName}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div> <br></br>
                <div>
                    <input name="searchTerm" className='search' onChange={this.inputUpdate.bind(this)} placeholder='Search...' />
                </div>

            </div>
        )
    }
}

export default ActiveUsers;