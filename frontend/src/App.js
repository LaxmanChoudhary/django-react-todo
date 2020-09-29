import React, { Component, Fragment } from "react";

// set css loader and style loader
// https://blog.jakoblind.no/css-modules-webpack/
import './App.css';

//used for providing store to all child components
import { Provider } from "react-redux";

// why using HashRouter vs BrowserRouter
// https://itnext.io/why-using-hash-based-urls-in-your-react-spa-will-save-you-more-time-than-you-think-a21e2c560879
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

//for error handling and alerts
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Components
import Todo from "./components/TodoComponent";
import Header from "./components/HeaderComponent";
import Alerts from "./components/AlertComponent";
import Register from "./components/RegisterComponent";
import Login from "./components/LoginComponent";
import PrivateRoute from "./components/PrivateRoute";

// Redux-store
import { ConfigureStore } from "./redux/configureStore";

import { loadUser } from "./redux/ActionCreators";

// Alert options
const alertOptions = {
	timeout: 3000,
	position: "top center",
};

const store = ConfigureStore();
class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	}

	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Router>
						<Fragment>
							<Header />
							<Alerts />
							<Switch>
								<PrivateRoute exact path="/" component={Todo} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Switch>
						</Fragment>
					</Router>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;