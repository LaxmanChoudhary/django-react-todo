import * as ActionTypes from "../ActionTypes";

const initialState = {
	todos: [],
};

export const Todos = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_TODOS:
			return {
				...state,
				todos: action.payload,
			};

		case ActionTypes.ADD_TODO:
			return {
				...state,
				todos: state.todos.concat(action.payload),
			};

		case ActionTypes.TOGGLE_TODO:
			let todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
			return {
				...state,
				todos: todos,
			};

		case ActionTypes.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};

		default:
			return state;
	}
};
