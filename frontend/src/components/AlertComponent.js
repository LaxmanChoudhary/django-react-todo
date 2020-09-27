import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";

class Alerts extends Component {
	constructor(props) {
		super(props);
	}

// https://reactjs.org/docs/react-component.html#componentdidupdate
	componentDidUpdate(prevProps) {
		// error -> for error objects
		// message -> for success payload
		const {alert, error, message} = this.props;
		// conditional error messages
		if (error !== prevProps.error) {
			if (error.msg.text) alert.error(`${error.msg.text.join()}`);
		}

		// conditional success messages
		if (message !== prevProps.message) {
			if (message.todoDelete) alert.success(message.todoDelete);
			if (message.todoAdded) alert.success(message.todoAdded);
		}
	};

	render() {
		return <Fragment />;
	}
}

export default withAlert()(Alerts);