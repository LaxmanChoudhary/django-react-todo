import React, { Component } from "react";
import { connect } from "react-redux";

import { getTodos, deleteTodo } from "../redux/ActionCreators";
import RenderTodo from "./RenderTodoComponent";

const mapStateToProps = (state) => ({
	todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch) => ({
	getTodos: () => {
		dispatch(getTodos());
	},
	deleteTodo: (id) => {
		dispatch(deleteTodo(id));
	},
});

class Todo extends Component {
	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		return (
			<div className="Main">
				<h1 className="text-center display-1">Todos</h1>
				<RenderTodo todos={this.props.todos} deleteTodo={this.props.deleteTodo}/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);