import React, { Component } from "react";
import { Table } from "reactstrap";

class RenderTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: "all",
		};

		this.handleToggle = this.handleToggle.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
	}

	handleToggle(id, completed) {
		let stat = { completed: !completed };
		this.props.toggleTodo(id, stat);
	}

// reference
// for filter: https://github.com/Vikram-Git/React-Django-Todo
	handleFilter(filter) {
		this.setState({
			filter: filter,
		});
	}

	todoFilter(todos, filter) {
		switch (filter) {
			case "completed":
				return todos.filter((todo) => todo.completed);
			case "not completed":
				return todos.filter((todo) => !todo.completed);
			default:
				return todos;
		}
	}

	render() {
		const filteredTodos = this.todoFilter(this.props.todos, this.state.filter);

		const status = (stat) => {
			if (stat) {
				return "Completed";
			} else {
				return "Not";
			}
		};

		return (
			<div className="card-body">
				<div className="btn-group">
					<button
						onClick={() => this.handleFilter("all")}
						className="btn btn-secondary btn-sm"
					>
						All
					</button>
					<button
						onClick={() => this.handleFilter("completed")}
						className="btn btn-secondary btn-sm"
					>
						Completed
					</button>
					<button
						onClick={() => this.handleFilter("not completed")}
						className="btn btn-secondary btn-sm"
					>
						Incomplete
					</button>
				</div>
				<ul className="list-group list-group-flush">
					{filteredTodos.map((todo) => (
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
			</div>
		);
	}
}

export default RenderTodo;
