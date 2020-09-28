import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";
import axios from "axios";

// ACTIONS FOR REDUCER- todo.js

// Get todos
export const getTodos = () => (dispatch) => {
	axios
		.get("api/todo/")
		.then((res) => {
			dispatch({
				type: ActionTypes.GET_TODOS,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

// delete todo
export const deleteTodo = (id) => (dispatch) => {
	axios
		.delete(`api/todo/${id}/`)
		.then((res) => {
			dispatch(createMessage({ todoDelete: "deleted" }));
			dispatch({
				type: ActionTypes.DELETE_TODO,
				payload: id,
			});
		})
		.catch((err) => console.log(err));
};

// Add todo
export const addTodo = (todo) => (dispatch) => {
	axios
		.post("/api/todo/", todo)
		.then((res) => {
			dispatch(createMessage({ todoAdded: "ADDED" }));
			dispatch({
				type: ActionTypes.ADD_TODO,
				payload: res.data,
			});
		})
		.catch((err) =>
			dispatch(returnErrors(err.response.data, err.response.status))
		);
};

// ACTIONS FOR REDUCER- message.js

// success-message creation
export const createMessage = (msg) => {
	return {
		type: ActionTypes.CREATE_MESSAGE,
		payload: msg,
	};
};

// ACTIONS FOR REDUCER- errors.js

// error message created
export const returnErrors = (msg, status) => {
	return {
		type: ActionTypes.GET_ERRORS,
		payload: { msg, status },
	};
};

// ACTIONS FOR REDUCER- auth.js

// Check token and load user
export const loadUser = () => (dispatch, getState) => {
	// just loading
	dispatch({
		type: ActionTypes.USER_LOADING
	});

	// get if any token exists in local storage of Auth Reducer
	const token = getState().auth.token;	

	// settting Header
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	// if token exists, add to Header
	if(token) {
		config.headers['Authorization'] = `Token ${toen}`;
	}

	axios
		.get('api/auth/user', config)
		.then(res => {
			dispatch({
				type: ActionTypes.USER_LOADED,
				payload: res.data
			});
		}).catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ActionTypes.AUTH_ERROR,
			})
		})
}