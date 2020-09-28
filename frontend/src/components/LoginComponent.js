import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			password2: "",
		};
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(e) {
		e.preventDefault();
		console.log("submit");
	}

	render() {
		const { username, password } = this.state;
		return (
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
					<h2 className="text-center display-4">Login</h2>
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								className="form-control"
								name="username"
								onChange={this.onChange}
								value={username}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								name="password"
								onChange={this.onChange}
								value={password}
							/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary">
								Login
							</button>
						</div>
						<p>
							Don't have an account? <Link to="/register">Register</Link>
						</p>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;