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
		this.setState({
			text: ""
		});
	}
	render() {
		return (
			<div className="container">
				<div className="card card-body mt-4 mb-4">
					<h2 className="display-4">Add Todo</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
						{
						//TodoInput here
						}
							<input
								className="form-control"
								type="text"
								name="text"
								onChange={this.handleChange}
								value={this.state.text}
							/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-sm btn-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Form;