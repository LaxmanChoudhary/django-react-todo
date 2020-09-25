import React from "react";

export default function RenderTodo(props) {
	return (
		<div>
			{console.log("second component")}
			<table className="table table-striped">
				<thead>
					<tr>
						<th>ID</th>
						<th>Text</th>
						<th>Completed</th>
						<th>Created_at</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{props.todos.map((todo) => {
						<tr key={todo.id}>
							<td>{todo.id}</td>
							<td>{todo.text}</td>
							<td>{todo.created_at}</td>
							<td>{todo.completed}</td>
							<td>
								<button className="btn btn-danger btn-sm">Delete</button>
							</td>
						</tr>;
					})}
				</tbody>
			</table>
		</div>
	);
}