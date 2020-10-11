import * as ActionTypes from "./ActionTypes";
import axios from "axios";

// ACTIONS FOR REDUCER- todo.js

// Get todos
export const getTodos = () => (dispatch, getState) => {
	axios
		.get("api/todo/", tokenConfig(getState))
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

// Add todo
export const addTodo = (todo) => (dispatch, getState) => {
	axios
		.post("/api/todo/", todo, tokenConfig(getState))
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

export const toggleTodo = (id, status) => (dispatch, getState) => {
	console.log(status)
	axios
		.patch(`/api/todo/${id}/`, status, tokenConfig(getState))
		.then((res) => {
			console.log(res.data)
			dispatch(createMessage({ toggleTodo: "toggled" }));
			dispatch({
				type: ActionTypes.TOGGLE_TODO,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

// delete todo
export const deleteTodo = (id) => (dispatch, getState) => {
	axios
		.delete(`api/todo/${id}/`, tokenConfig(getState))
		.then((res) => {
			dispatch(createMessage({ todoDelete: "deleted" }));
			dispatch({
				type: ActionTypes.DELETE_TODO,
				payload: id,
			});
		})
		.catch((err) => console.log(err));
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
// getState allows to retrieve reducer state element
export const loadUser = () => (dispatch, getState) => {
	// just loading
	dispatch({
		type: ActionTypes.USER_LOADING,
	});

	axios
		.get("api/auth/user", tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: ActionTypes.USER_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ActionTypes.AUTH_ERROR,
			});
		});
};

// Login User
export const loginUser = (username, password) => (dispatch) => {
	// settting Header
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request body
	const body = JSON.stringify({ username, password });

	axios
		.post("api/auth/login", body, config)
		.then((res) => {
			dispatch({
				type: ActionTypes.LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ActionTypes.LOGIN_FAIL,
			});
		});
};

// register
export const registerUser = ({ username, password, email }) => (dispatch) => {
	// settting Header
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// Request body
	const body = JSON.stringify({ username, password, email });

	axios
		.post("api/auth/register", body, config)
		.then((res) => {
			dispatch({
				type: ActionTypes.REGISTER_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
			dispatch({
				type: ActionTypes.REGISTER_FAIL,
			});
		});
};

// logout user
export const logoutUser = () => (dispatch, getState) => {
	axios
		.post("api/auth/logout", null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: ActionTypes.LOGOUT_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(returnErrors(err.response.data, err.response.status));
		});
};


// setup config+token - helper function
export const tokenConfig = (getState) => {
	// get if any token exists in local storage of Auth Reducer
	const token = getState().auth.token;

	// settting Header
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// if token exists, add to Header
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	}

	return config;
};
