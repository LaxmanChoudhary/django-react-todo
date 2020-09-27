import React, { Component, Fragment } from "react";
//used for providing store to all child components
import { Provider } from "react-redux";

//for error handling and alerts
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// Components
import Todo from "./components/TodoComponent";
import Header from "./components/HeaderComponent";
// Redux-store
import { ConfigureStore } from "./redux/configureStore";

// Alert options
const alertOptions = {
	timeout: 3000,
	position: "top center",
};

const store = ConfigureStore();
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions}>
					<Fragment>
						<Header />
						<Todo />
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;