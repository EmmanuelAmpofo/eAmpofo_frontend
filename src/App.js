import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import classNames from 'classnames';


import Register from './pages/register'
import Chat from './pages/chat';
import Join from './pages/join';
import login from './pages/login';
import privateMessage from './components/privatemessage';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      site_loaded: false
    }
  }

  componentDidMount() {
    this.setState({
      site_loaded: true
    });
  }

  render() {
    return (
      <div className={classNames({'App': true, 'site_loaded': this.state.site_loaded})}>
        <Router>
          <Switch>
            
            <Route path="/" exact component={Register} />
            <Route path="/chat/:name/:room" component={Chat} />
            <Route path="/join" component={Join} />
            <Route path="/login" component={login} />
            <Route path='/privatemessage' component={privateMessage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
