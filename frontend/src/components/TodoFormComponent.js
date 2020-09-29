import React, { Component, Fragment } from "react";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const { text } = this.state;
		const todo = { text };
		this.props.addTodo(todo);

		// set input field to blank after adding it
		this.setState({
			text: "",
		});
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className="d-flex">
						<div className="form-group flex-grow-1">
							<input
								className="form-control"
								type="text"
								name="text"
								placeholder="what to-do today"
								onChange={this.handleChange}
								value={this.state.text}
							/>
						</div>
						<div className="ml-auto">
							<button
								type="submit"
								className="btn btn-primary"
							>
							Add
							</button>
						</div>
				</form>
			</div>
		);
	}
}

export default Form;
