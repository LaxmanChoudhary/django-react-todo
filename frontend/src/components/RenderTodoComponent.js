import React from "react";
import { Table } from "reactstrap";

export default function RenderTodo(props) {
	const status = (completed) => {
		let button;
		if (completed) {
			return "Completed"
		} else {
			return "Not Completed"
		}
	}
	return (
		<div className="container">

			<Table striped>
				<thead>
					<tr>
						<th>ID</th>
						<th>Text</th>
						<th>Completed</th>
						<th>Created_on</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{props.todos.map((todo) => (
						<tr key={todo.id}>
							<td scope="row">{todo.id}</td>
							<td>{todo.text}</td>
							<td>{status(todo.completed)}</td>
							<td>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(todo.created_at)))}</td>
							<td>
								<button onClick={props.deleteTodo.bind(this, todo.id)} className="btn btn-danger btn-sm">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
}