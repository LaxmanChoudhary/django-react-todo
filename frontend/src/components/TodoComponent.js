import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//for typechecking of props
import PropTypes from "prop-types";

import { getTodos, deleteTodo, addTodo } from "../redux/ActionCreators";
import RenderTodo from "./RenderTodoComponent";
import Form from "./TodoFormComponent";

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
	addTodo: (todo) => {
		dispatch(addTodo(todo));
	},
});

//typechecking (a good practise)(optional for beginners)
// Todo.propTypes = {
// 	todos: PropTypes.array.isRequired,
// 	getTodos: PropTypes.func.isRequired,
// 	deleteTodo: PropTypes.func.isRequired,
// 	addTodo: PropTypes.func.isRequired,
// };

class Todo extends Component {
	componentDidMount() {
		this.props.getTodos();
	}

	render() {
		return (
			<div className="container">
				<h1 className="display-1">todos</h1>
				<Form addTodo={this.props.addTodo} />
				<RenderTodo
					todos={this.props.todos}
					deleteTodo={this.props.deleteTodo}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);