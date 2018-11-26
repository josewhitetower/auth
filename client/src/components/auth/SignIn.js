import React, { Component } from 'react';
import { signIn } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    emailErrors: '',
    passwordErrors: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    this.checkValid(e.target.id, e.target.value);
  };

  isDisabled = () => {
    return this.state.emailErrors || this.state.passwordErrors;
  };

  checkValid = (state, value) => {
    if (state === 'password') {
      const isPasswordValid = value && value.length;
      if (!isPasswordValid) {
        this.setState({ passwordErrors: 'Password is a mandatory field' });
      } else {
        this.setState({ passwordErrors: '' });
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
    this.props.signIn(this.state);
  };

  render() {
    if (this.props.user) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <button
              className="btn purple lighten-2"
              disabled={this.isDisabled()}
            >
              Login
            </button>
            <div className="center red-text">
              {this.props.error ||
                this.state.passwordErrors ||
                this.state.emailErrors}
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
    signIn: credentials => dispatch(signIn(credentials, ownProps))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
