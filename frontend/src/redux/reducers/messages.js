import * as ActionTypes from "../ActionTypes";

const initialState = {};

export const Message = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.CREATE_MESSAGE:
			return (state=action.payload)

		default:
			return state;
	}
};