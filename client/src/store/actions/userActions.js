import * as types from '../constants/ActionTypes';
import axios from 'axios';

const url =  process.env.NODE_ENV === 'development' ?'http://localhost:8081': '';

const showToast = (text) => {
	window.M.toast({html: text, classes:'green lighten-1'});
};
export const setUser = (user)=> {
	return {
		type:types.SET_USER,
		user,
	};
};
export const setError = (error)=> {
	return {
		type:types.SET_ERROR,
		error,
	};
};

export const logOut = () => {
	localStorage.removeItem('token');
	return {
		type: types.SET_USER,
		user: null,
	};
};

export const setAllUsers = (users) => {
	return {
		type: types.GET_ALL_USERS,
		users
	};
};

export const signUp = (user, ownProps) => {
	return (dispatch) => {
		axios.post(`${url}/api/users/register`, user)
			.then((response) => {
				dispatch(setUser(response.data.user));
				localStorage.setItem('token', response.data.token);
				ownProps.history.push('/');
				showToast(response.data.message.text);
			}).catch((error)=> {
				if(error.response.data.errors) {
					const errors = error.response.data.errors.map(err => err.msg).join(', ');
					dispatch(setError(errors));
				}
			});
	};
};

export const signIn = (credentials, ownProps) => {
	return (dispatch) => {
		axios.post(`${url}/api/users/login`, credentials)
			.then((response) => {
				dispatch(setUser(response.data.user));
				localStorage.setItem('token', response.data.token);
				ownProps.history.push('/');
				showToast(response.data.message.text);
			}).catch((error)=> {
				if(error.response.data.errors) {
					const errors = error.response.data.errors.map(err => err.msg).join(', ');
					dispatch(setError(errors));
				}
			});
	};
};

export const getAllUsers = () => {
	return(dispatch) => {
		axios.get(`${url}/api/users/`)
			.then((response) => {
				dispatch(setAllUsers(response.data.users));
			}).catch((error)=> {
				if (error.message) {
					console.log(error.message);
				}
				if(error.response && error.response.data.errors) {
					const errors = error.response.data.errors.map(err => err.msg).join(', ');
					dispatch(setError(errors));
				}
			});
	};
};

export const updateUser = (user) => {
	return(dispatch) => {
		axios.put(`${url}/api/users/` + user._id, user, {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		})
			.then((response) => {
				dispatch(setUser(response.data.user));
				showToast(response.data.message.text);
			}).catch((error)=> {
				if (error.message) {
					console.log(error.message);
				}
				if(error.response && error.response.data.errors) {
					const errors = error.response.data.errors.map(err => err.msg).join(', ');
					dispatch(setError(errors));
				}
			});
	};
};
export const deleteAccount = (user, ownProps) => {
	return(dispatch) => {
		axios.delete(`${url}/api/users/` + user._id,{
			headers: {
				Authorization: localStorage.getItem('token')
			}
		})
			.then((response) => {
				dispatch(logOut());
				showToast(response.data.message.text);
				ownProps.history.push('/');
			}).catch((error)=> {
				if (error.message) {
					console.log(error.message);
				}
				if(error.response && error.response.data.errors) {
					const errors = error.response.data.errors.map(err => err.msg).join(', ');
					dispatch(setError(errors));
				}
			});
	};
};

export const changePassword = (user) => {
	if (user.currentPassword && user.newPassword) {
		return(dispatch) => {
			axios.put(`${url}/api/users/changepassword`, user, {
				headers: {
					Authorization: localStorage.getItem('token')
				}
			})
				.then((response) => {
					dispatch(setUser(response.data.user));
					showToast(response.data.message.text);
				}).catch((error)=> {
					if (error.message) {
						console.log(error.message);
					}
					if(error.response && error.response.data.errors) {
						const errors = error.response.data.errors.map(err => err.msg).join(', ');
						dispatch(setError(errors));
					}
				});;
		};
	}
};