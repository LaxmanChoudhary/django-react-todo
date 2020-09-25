import * as ActionTypes from './ActionTypes';
import { baseUrl } from './baseUrl';
import axios from 'axios';

//GET_TODOS
export const getTodos = () => (dispatch) => {
	axios
		.get('api/todo/')
		.then(res => {
			dispatch({
				type: ActionTypes.GET_TODOS,
				payload: res.data
			});
		}).catch(err => console.log(err));
}