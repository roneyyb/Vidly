import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MovieComponent from "./components/MovieComponent";
import "./App.css";
import Customer from "./Customer";
import Rentals from "./Rentals";
import NotFound from "./NotFound";
import NavBar from "./NavBar";
import MovieForm from "./components/MovieForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies" exact component={MovieComponent}></Route>
            <Route path={`/movies/:id`} component={MovieForm}></Route>
            <Route path="/customer" component={Customer}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect exact from={"/"} to={"/movies"} />
            <Redirect from={"/"} to={"/not-found"} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
