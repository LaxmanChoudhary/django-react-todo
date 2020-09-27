import * as ActionTypes from "../ActionTypes";

const initialState = {
	msg: {},
	status: null,
};

export const Errors = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.GET_ERRORS:
			return {
				msg: action.payload.msg,
				status: action.payload.status,
			};

		default:
			return state;
	}
};