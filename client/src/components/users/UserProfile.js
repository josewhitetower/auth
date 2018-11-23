import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUser, changePassword, deleteAccount} from '../../store/actions/userActions';
import { Redirect } from 'react-router-dom';

//TODO: Find a better way to work with edit forms: Not setting the state to a form in the constructor
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showDelete: false,
      user: props.user,
    };
  }

handlePasswordChange = (e) => {
  const showPassword = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  this.setState({showPassword});
}
handleShowDelete = (e) => {
  const showDelete = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  this.setState({showDelete});
}

handleUserChange = (e) => {
  const user = {
    ...this.state.user,
    [e.target.id]:e.target.value

  };
  this.setState({user});
}

    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.updateUser(this.state.user, this.props);
    }

    handleChangePassword = (e) =>{

      e.preventDefault();
      this.props.changePassword(this.state.user, this.props);
    }

    handleDeleteAccount = (e) =>{
      
      e.preventDefault();
      this.props.deleteAccount(this.state.user, this.props);
    }

    render() {
      const {user} = this.state;
      
      const showDelete = this.state.showDelete ? <button className="btn black lighten-2" onClick={this.handleDeleteAccount}>Delete Account</button> : null;
      const showChangePassword = this.state.showPassword ? 
        (
          <form onSubmit={this.handleChangePassword} className="white">
            <div className="changePassword">
              <div className="input-field">
                <label htmlFor="currentPassword" className="active">Current Password</label>
                <input type="password" id="currentPassword" required onChange ={this.handleUserChange}/>
              </div>
              <div className="input-field">
                <label htmlFor="newPassword" className="active">New Password</label>
                <input type="password" id="newPassword" required onChange ={this.handleUserChange}/>
              </div>
            </div>
            <div className="input-field">
              <button className="btn purple lighten-2">Change Password</button>    
            </div>
          </form>
        ): null;
    
      const userList = user ? 
        (
          <div className= "forms">

            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">User Profile</h5>
              <div className="input-field">
                <label htmlFor="email" className="active">Email</label>
                <input type ="email" id="email" required onChange ={this.handleUserChange} defaultValue={user.email}/>
              </div>
              <div className="input-field">
                <label htmlFor="firstName" className="active">First name</label>
                <input type="text" id="firstName" required onChange ={this.handleUserChange} defaultValue ={user.firstName} />
              </div>
              <div className="input-field">
                <label htmlFor="lastName" className="active">Last name</label>
                <input type="text" id="lastName" required onChange ={this.handleUserChange} defaultValue={user.lastName}/>
              </div>

              <div className="input-field">
                <button className="btn purple lighten-2">Update</button>
                <div className="center red-text">
                  {this.props.error} 
                </div>
              </div>
    
              <div className="switch">
                <label>
                  <input type="checkbox" checked={this.state.showPassword} onChange={this.handlePasswordChange}/>
                  <span className="lever" ></span>
Change Password
                </label>
              </div>
              <div className="switch">
                <label>
                  <input type="checkbox" checked={this.state.showDelete} onChange={this.handleShowDelete}/>
                  <span className="lever" ></span>
Delete Account
                </label>
              </div>

            </form>
            {showChangePassword}
            {showDelete}
          </div>
        ) : 
        (
          <Redirect to="/signin"/>
        );
    
      return (
        <div className="container">
          {userList}
        </div>
      );
    
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    error: state.users.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) =>{
  return {
    updateUser: (user)=> dispatch(updateUser(user, ownProps)),
    deleteAccount: (user)=> dispatch(deleteAccount(user, ownProps)),
    changePassword: (user)=> dispatch(changePassword(user, ownProps))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
