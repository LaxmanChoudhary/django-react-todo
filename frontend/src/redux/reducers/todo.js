import * as ActionTypes from "../ActionTypes";

export const initialState = {
	todos: [],
};

export const Todos = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_TODOS:
			return {
				...state,
				todos: action.payload,
			};

		case ActionTypes.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};

		case ActionTypes.ADD_TODO:
			return {
				...state,
				todos: state.todos.concat(action.payload),
			};

		default:
			return state;
	}
};