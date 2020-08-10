import React, {Component} from "react";
import { getMovies } from "./fakeMovieService";
import { getGenres } from "./fakeGenreService";
import EachRow from "./eachRow";
import Pagination from "./paginationComponents";
import GenreContainer from "./genreContainer";
import { paginate } from "./utils";

class TableComponent extends Component {

    constructor(props) {
        super(props);

       
        this.state = {
            movies: [],
            genreList: []   ,
            currentPage: 1,
            moviesPerPage: 4,
            totalPage: 3,
            renderMovies: [],
            selectedGenre:"All Genres"
        };
    }

    deleteMovie = (id) => {
        const movies = this.state.movies.filter((movie) => movie._id !== id);
        this.setState({movies});
    };

    componentDidMount() {
        const movies = getMovies();
        this.setState({ totalPage: Math.ceil(movies.length / 4), movies, genreList:getGenres()});
    }
    
    changePage = (currentPage) => {
        this.setState({currentPage});
    };

    renderMovies(moviesOnPage) {
        if (moviesOnPage.length === 0) {
            return <p>No Movies to show on this page</p>;
        }
        return moviesOnPage.map((movie, index) => (
            <EachRow
                key={movie._id}
                movie={movie}
                deleteMovie={this.deleteMovie}
            />
        ));
    }

    renderTable() {
        const { moviesPerPage, currentPage, movies, selectedGenre } = this.state;
        var items = [...movies];
        if (selectedGenre !== "All Genres") {
            items = items.filter((item) => item.genre.name === selectedGenre);
        }
        const moviesOnPage = paginate(items, currentPage, moviesPerPage);

        return (
            <div>
                <p>Showing {items.length} movies in the database.</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>{this.renderMovies(moviesOnPage)}</tbody>
                </table>
            </div>
        );
    }

    changeGenre = (selectedGenre) => {
        this.setState({ selectedGenre });
    }

    render() {
        const { length: movieCount } = this.state.movies;
        const { totalPage, currentPage, selectedGenre, genreList } = this.state;
        
        if (movieCount === 0)
            return <p> There are no movies in the database</p>;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <GenreContainer
                            selectedGenre={selectedGenre}
                            genreList={genreList}
                            changeGenre={this.changeGenre}
                        />
                    </div>
                    <div className="col">
                        {this.renderTable()}
                        <Pagination
                            changePage={this.changePage}
                            totalPage={totalPage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TableComponent;
