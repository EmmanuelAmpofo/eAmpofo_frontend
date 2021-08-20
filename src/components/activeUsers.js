import React, { Component } from "react";
import '../pages/css/activeUsers.css';

class ActiveUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
    };
  }

  inputUpdate(e) {
    const value = e.target.value;
    const foundUsers = this.props.users.filter((user) => {
      return user.email.includes(value);
    });
    this.setState({
      ...this.state,
      users: foundUsers,
    });
  }
  componentDidUpdate() {
    if (this.state.users.length <= 0) {
      // this.state.users = this.props.users
      this.setState({
        ...this.state,
        users: this.props.users,
      });
    }
  }
  render() {
    return (
      <div className="activeUsers">
        <h2 className="headline">Active users</h2>
        <div id="users">
          <ul>
            {this.state.users.map((user, index) => (
              <li key={index}>
                <span>
                  <a href="/privateMessage">{user.firstName}</a>
                </span>
              </li>
            ))}
          </ul>
        </div>{" "}
        <br></br>
        <div>
          <input
            name="searchTerm"
            className="search"
            onChange={this.inputUpdate.bind(this)}
            placeholder="Search by email..."
          />
        </div>
      </div>
    );
  }
}

export default ActiveUsers;
