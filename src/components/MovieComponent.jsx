import React, {Component} from "react";
import {getMovies} from "./fakeMovieService";
import {getGenres} from "./fakeGenreService";
import Pagination from "./PaginationComponent";
import GenreContainer from "./GenreContainer";
import TableComponent from "./TableComponent";

class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            genreList: [],
            currentPage: 1,
            moviesPerPage: 4,
            totalPage: 3,
            renderMovies: [],
            selectedGenre: "All Genres",
            order: "asc",
            sortColumn:{ path:'title', order:'asc'}
        };
    }

    deleteMovie = (id) => {
        const movies = this.state.movies.filter((movie) => movie._id !== id);
        this.setState({movies});
    };

    likeMovie = (id) => {
        const movies = [...this.state.movies];
        const index = movies.findIndex((movie) => movie._id === id);
        movies[index]["liked"] = !movies[index].liked;
        this.setState({movies});
    };

    sortMovie = (sortColumn) => {
        
        this.setState({ sortColumn});
    }

    componentDidMount() {
        const movies = getMovies();
        this.setState({
            totalPage: Math.ceil(movies.length / 4),
            movies,
            genreList: getGenres(),
        });
    }

    changePage = (currentPage) => {
        this.setState({currentPage});
    };

    changeGenre = (selectedGenre) => {
        this.setState({selectedGenre});
    };

    render() {
        const {length: movieCount} = this.state.movies;
        const {
            totalPage,
            currentPage,
            selectedGenre,
            genreList,
            moviesPerPage,
            movies,
            sortColumn
        } = this.state;

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
                        <TableComponent
                            moviesPerPage={moviesPerPage}
                            movies={movies}
                            currentPage={currentPage}
                            selectedGenre={selectedGenre}
                            likeMovie={this.likeMovie}
                            deleteMovie={this.deleteMovie}
                            sortMovie={this.sortMovie}
                            sortColumn={sortColumn}
                        />
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

export default MovieComponent;
