import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../redux/ActionCreators";
import { createMessage } from "../redux/ActionCreators";

export class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			password2: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.password != this.state.password2) {
			this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
		} else {
			let user = {
				username: this.state.username,
				email: this.state.email,
				password: this.state.password,
			};
			this.props.registerUser(user);
		}
	}

	render() {
		if (this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}
		const { username, email, password, password2 } = this.state;
		return (
			<div className="col-md-6 m-auto">
				<div className="card card-body mt-5">
					<h2 className="display-4 text-center">Register</h2>
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
							<label>Email</label>
							<input
								type="text"
								className="form-control"
								name="email"
								onChange={this.handleChange}
								value={email}
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
							<label>Confirm</label>
							<input
								type="password"
								className="form-control"
								name="password2"
								onChange={this.handleChange}
								value={password2}
							/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary">
								Register
							</button>
						</div>
						<p>
							Already have an account? <Link to="/login">Login</Link>
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
	registerUser: (user) => {
		dispatch(registerUser(user));
	},
	createMessage: (msg) => {
		dispatch(createMessage(msg));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
