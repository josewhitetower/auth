import React, { Component } from 'react';
import { signUp } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    emailErrors: '',
    passwordErrors: '',
    firstNameErrors: '',
    lastNameErrors: '',
    confirmPasswordErrors: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    this.checkValid(e.target.id, e.target.value);
  };

  isDisabled = () => {
    return (
      this.state.emailErrors ||
      this.state.passwordErrors ||
      this.state.confirmPasswordErrors ||
      this.state.firstNameErrors ||
      this.state.lastNameErrors
    );
  };

  checkValid = (state, value) => {
    if (state === 'password') {
      if (!value) {
        this.setState({ passwordErrors: 'Password is a mandatory field' });
      } else if (value.length < 6) {
        this.setState({
          passwordErrors: 'Password must have at least 6 characters'
        });
      } else {
        this.setState({ passwordErrors: '' });
      }
    }

    if (state === 'firstName') {
      const isFirstNameValid = value && value.length;
      if (!isFirstNameValid) {
        this.setState({ firstNameErrors: 'First name is a mandatory field' });
      } else {
        this.setState({ firstNameErrors: '' });
      }
    }

    if (state === 'lastName') {
      const isLastNameValid = value && value.length;
      if (!isLastNameValid) {
        this.setState({ lastNameErrors: 'Last name is a mandatory field' });
      } else {
        this.setState({ lastNameErrors: '' });
      }
    }

    if (state === 'confirmPassword') {
      const isEqual = value === this.state.password;
      if (!value) {
        this.setState({
          confirmPasswordErrors: 'Confirm password name is a mandatory field'
        });
      } else if (!isEqual) {
        this.setState({ confirmPasswordErrors: 'Passwords don\'t match' });
      } else {
        this.setState({ confirmPasswordErrors: '' });
      }
    }

    if (state === 'email') {
      const isEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
      const isEmailValid = value && isEmail.test(value);
      if (!value) {
        this.setState({ emailErrors: 'Email is a mandatory field' });
      } else if (!isEmailValid) {
        this.setState({ emailErrors: 'Email must be a valid E-Mail Address' });
      } else {
        this.setState({ emailErrors: '' });
      }
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    if (this.props.user) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button
              className="btn purple lighten-2"
              disabled={this.isDisabled()}
            >
              Sign Up
            </button>
            <div className="center red-text">
              {this.props.error ||
                this.state.emailErrors ||
                this.state.passwordErrors ||
                this.state.firstNameErrors ||
                this.state.lastNameErrors ||
                this.state.confirmPasswordErrors}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.users.error,
    user: state.users.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: user => dispatch(signUp(user, ownProps))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
