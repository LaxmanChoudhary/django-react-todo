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
			dispatch({
				type: ActionTypes.DELETE_TODO,
				payload: id,
			});
		})
		.catch((err) => console.log(err));
};