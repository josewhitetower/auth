import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import UserProfile from './components/users/UserProfile';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/navigation/Navbar';
import Page404 from './components/dashboard/Page404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={UserProfile} />
            <Route path="*" component={Page404} />
          </Switch>
          <div className="center">
            <p>
              {' '}
              Created with{' '}
              <span role="img" aria-label="heart">
                💓{' '}
              </span>
              by{' '}
              <a
                href="https://www.github.com/josewhitetower"
                target="_blank"
                rel="noopener noreferrer"
              >
                @josewhitetower
              </a>
            </p>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
