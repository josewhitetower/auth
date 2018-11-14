import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateUser} from '../../store/actions/userActions';
import { Redirect } from 'react-router-dom';

//TODO: Find a better way to work with edit forms: Not setting the state to a form in the constructor
class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user,
		};
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
    	this.props.updateUser(this.state.user);
    }

    render() {
    	const {user} = this.state;
    	
    	const userList = user 
    		? (<form onSubmit={this.handleSubmit} className="white">
    			<h5 className="grey-text text-darken-3">Sign Up</h5>
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
    		</form>)
    		: (
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
		user: state.users.user
	};
};

const mapDispatchToProps = (dispatch) =>{
	return {
	  updateUser: (user)=> dispatch(updateUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
