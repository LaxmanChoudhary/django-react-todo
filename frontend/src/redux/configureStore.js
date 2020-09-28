/*
for providing all store functionalities to the components
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

//importing reducers
import { Todos } from './reducers/todo';
import { Errors } from "./reducers/errors";
import { Message } from "./reducers/messages";
import { Auth } from "./reducers/auth";

export const ConfigureStore =() => {
	const store = createStore(
		// Reducers
		// available at mapStateToProps as state.___
		combineReducers({
			todos: Todos,
			errors: Errors,
			message: Message,
			auth: Auth,
		}),
		//for redux-devtools and middleware
		composeWithDevTools(applyMiddleware(thunk, logger))
	);
	return store;
}