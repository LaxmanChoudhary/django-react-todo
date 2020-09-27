import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "./baseUrl";
import axios from "axios";

//GET_TODOS
export const getTodos = () => (dispatch) => {
	axios
		.get("api/todo/")
		.then((res) => {
			dispatch({
				type: ActionTypes.GET_TODOS,
				payload: res.data,
			});
		})
		.catch((err) => console.log(err));
};

//DELETE_TODO
export const deleteTodo = (id) => (dispatch) => {
	axios
		.delete(`api/todo/${id}/`)
		.then((res) => {
			dispatch(createMessage({ todoDelete : "deleted"}))
			dispatch({
				type: ActionTypes.DELETE_TODO,
				payload: id,
			});
		})
		.catch((err) => console.log(err));
};

//ADD_TODO
export const addTodo = (todo) => (dispatch) => {
	axios
		.post("/api/todo/", todo)
		.then((res) => {
			dispatch(createMessage({ todoAdded : "ADDED"}))
			dispatch({
				type: ActionTypes.ADD_TODO,
				payload: res.data,
			});
		})
		.catch((err) => {
			const errors = {
				msg: err.response.data,
				status: err.response.status,
			};
			dispatch({
				type: ActionTypes.GET_ERRORS,
				payload: errors,
			});
		});
};

// error-message creation
export const createMessage = (msg) => {
	return {
		type: ActionTypes.CREATE_MESSAGE,
		payload: msg,
	};
};