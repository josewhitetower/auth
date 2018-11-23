import React, { Component } from 'react';
import {signIn} from '../../store/actions/userActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignIn extends Component {
    state = {
      email: '',
      password: '',        
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]:e.target.value
      });
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.signIn(this.state);
    }

    render() {
      if (this.props.user) {
        return <Redirect to ='/'/>;
      }
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type ="email" id="email" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn purple lighten-2">Login</button>
              <div className="center red-text">
                {this.props.error}
              </div>
            </div>
          </form>
        </div>
      );
    }
}
const mapStateToProps = (state) => {
  return {
    error: state.users.error,
    user: state.users.user
  };
};
const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    signIn: (credentials) => dispatch(signIn(credentials, ownProps))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
