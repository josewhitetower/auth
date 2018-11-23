import React, { Component } from 'react';
import {signUp} from '../../store/actions/userActions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignUp extends Component {
    state = {
      email: '',
      password: '',
      confirmPassword:'',
      firstName: ''  ,
      lastName: ''     
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]:e.target.value
      });
    }
    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.signUp(this.state);
    }

    render() {
      if (this.props.user) {
        return <Redirect to ='/'/>;
      }
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type ="email" id="email" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" id="confirmPassword" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last name</label>
              <input type="text" id="lastName" required onChange ={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn purple lighten-2">Sign Up</button>
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
    user: state.users.user,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp : (user) => dispatch(signUp(user, ownProps))
  }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
