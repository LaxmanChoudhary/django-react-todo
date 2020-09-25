import React, { Component, Fragment } from "react";

//used for providing store to all child components
import { Provider } from "react-redux";

import Todo from "./components/TodoComponent";
import Header from "./components/HeaderComponent";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

export class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Header />
					<Todo />
				</Fragment>
			</Provider>
		);
	}
}

export default App;