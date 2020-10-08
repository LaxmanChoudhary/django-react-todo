import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";

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

			if (error.msg.non_field_errors) alert.error(`${error.msg.non_field_errors.join()}`);
			if (error.msg.username) alert.error(`${error.msg.username.join()}`);
		}

		// conditional success messages
		if (message !== prevProps.message) {
			if (message.todoDelete) alert.success(message.todoDelete);
			if (message.todoAdded) alert.success(message.todoAdded);
			if (message.toggleTodo) alert.success(message.toggleTodo);
			if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
		}
	};

	render() {
		return <Fragment />;
	}
}

const mapStateToProps = (state) => ({
	error: state.errors,
	message: state.message,
})

export default connect(mapStateToProps)(withAlert()(Alerts));