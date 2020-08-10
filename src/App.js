import React, {Component} from "react";
import TableComponent from "./components/tableComponent";
import "./App.css";

class App extends Component {
	render() {
		return (
			<main className="container">
				<TableComponent/>
			</main>
		);
	}
}

export default App;
