import React, { Component } from "react";
import { Table } from "reactstrap";

class RenderTodo extends Component {
	constructor(props) {
		super(props);

		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(id, completed) {
		let stat = { completed: !completed };
		this.props.toggleTodo(id, stat);
	}

	render() {
		const status = (stat) => {
			if (stat) {
				return "Completed";
			} else {
				return "Not";
			}
		};

		return (
			<div className="card-body">
				<ul className="list-group list-group-flush">
					{this.props.todos.map((todo) => (
						<li key={todo.id} className="d-flex list-group-item">
							<div className="mr-auto">{todo.text}</div>
							<div className="">
								<button
									className="btn btn-sm mx-1"
									onClick={() => this.handleToggle(todo.id, todo.completed)}
								>
									{status(todo.completed)}
								</button>
								<button
									onClick={this.props.deleteTodo.bind(this, todo.id)}
									className="btn btn-danger btn-sm"
								>
									&#xff38;
								</button>
							</div>
						</li>
					))}
				</ul>
				<div className="btn-group">
					<button className="btn btn-secondary btn-sm">All</button>
					<button className="btn btn-secondary btn-sm">Completed</button>
					<button className="btn btn-secondary btn-sm">Incomplete</button>
				</div>
			</div>
		);
	}
}

export default RenderTodo;
