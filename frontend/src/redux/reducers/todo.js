import * as ActionTypes from '../ActionTypes';

export const initialState = {
	todos: []
}

export const Todos = (state=initialState, action) => {
	switch(action.type) {
		case ActionTypes.GET_TODOS:
			return {
				...state,
				todos: action.payload
			};

		default:
			return state;
	}

};