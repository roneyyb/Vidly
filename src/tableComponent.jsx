import React, { Component } from 'react';
import { getMovies, deleteMovie } from "./fakeMovieService";

class TableComponent extends Component {
    state = { 
        movies: getMovies()
    }

    renderMovies() {
            return this.state.movies.map((movie,index) => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                        <button className="btn btn-danger sm" onClick={() => {
                            this.deleteMovie(movie._id);
                        }}>Delete</button>
                    </td>
                </tr>
            )); 
    }

    deleteMovie = (id) => {
        const movies = this.state.movies.filter(movie => movie._id !== id);
        this.setState({ movies });
    }

    render() {
        
        const { length: movieCount } = this.state.movies;

        if (movieCount === 0)
            return <p> There are no movies in the database</p>;
        
        return (
            <React.Fragment>
                <p>Showing {movieCount} movies in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.renderMovies()}</tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default TableComponent;