import React, {Component} from "react";
import MovieComponent from "./components/MovieComponent";
import "./App.css";

class App extends Component {
	render() {
		return (
			<main className="container">
				<MovieComponent/>
			</main>
		);
	}
}

export default App;
