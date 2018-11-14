import {SET_USER, SET_ERROR, GET_ALL_USERS} from '../constants/ActionTypes';

const initState = {
	user: null,
	error: null,
	users: null,
};

const userReducer = (state = initState, action) => {
    
	switch (action.type) {
	case SET_USER:
		return {
			...state,
			user:action.user,
			error: null
		};
	case SET_ERROR:
		return {
			...state,
			error: action.error
		};
	case GET_ALL_USERS:
		return {
			...state,
			users: action.users,
			error: null
		};
        
	default:
		return state;
	}
};

export default userReducer;