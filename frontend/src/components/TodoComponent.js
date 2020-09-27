import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

//for typechecking of props
import PropTypes from "prop-types";

import { getTodos, deleteTodo, addTodo } from "../redux/ActionCreators";
import RenderTodo from "./RenderTodoComponent";
import Form from "./TodoFormComponent";
import Alerts from "./AlertComponent";

const mapStateToProps = (state) => ({
	todos: state.todos.todos,
	error: state.errors,
	message: state.message,
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
			<Fragment>
				<Alerts error={this.props.error} message={this.props.message} />
				<Form addTodo={this.props.addTodo} />
				<h1 className="text-center display-1">Todos</h1>
				<RenderTodo
					todos={this.props.todos}
					deleteTodo={this.props.deleteTodo}
				/>
			</Fragment>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);