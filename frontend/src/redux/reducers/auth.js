import * as ActionTypes from "../ActionTypes";

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoading: false,
	user: null
}

export const Auth = (state=initialState, action) => {
	switch(action.type) {
		case ActionTypes.USER_LOADING:
			return {
				...state,
				isLoading: true
			}
		case ActionTypes.USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			}

		case ActionTypes.AUTH_ERROR:
			localStorage.removeItem('token');
			return{
				...state,
				token: null,
				user: null,
				isAuthenticated: null,
				isLoading: false
			}

		default:
			return state;
	}
}