import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/ActionCreators";

export class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.loginUser(this.state.username, this.state.password)
	}
	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}
		const { username, password } = this.state;
		return (
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
					<h2 className="text-center display-4">Login</h2>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								className="form-control"
								name="username"
								onChange={this.handleChange}
								value={username}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control"
								name="password"
								onChange={this.handleChange}
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

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (username, password) => {
		dispatch(loginUser(username, password));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);