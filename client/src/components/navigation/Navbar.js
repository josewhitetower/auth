import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SignedOutLinks from './SignedOutLinks';
import SignedInLinks from './SignedInLinks';

const Navbar = (props) => {
	const {user} = props;
	const links = user && user._id ? <SignedInLinks user = {props.user}/> : <SignedOutLinks/>;
	return (
		<nav className="nav-wrapper purple lighten-2">
			<div className="container">
				<Link to='/' className='brand-logo left'>User Manager</Link> 
				{links}                             
			</div>
		</nav>
	);
};

const mapStateToProps =(state) => {
	return {
		user: state.users.user
	};
};

export default connect(mapStateToProps)(Navbar);