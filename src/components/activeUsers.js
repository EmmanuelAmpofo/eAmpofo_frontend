import React, { Component } from 'react';

class ActiveUsers extends Component {

    render() {
   
        return (
            <div className="activeUsers">
                <h2 className="headline">
                    Active users
                </h2>
                <div id="users">
                    <ul>
                        {this.props.users.map((user, index) => (
                            <li key={index}>
                                <span>
                                    {user.firstName}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div> <br></br>
                <div>
                    <input  className='search' placeholder='Search...' />
                </div>

            </div>
        )
    }
}

export default ActiveUsers;