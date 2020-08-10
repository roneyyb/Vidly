import React, { Component } from "react";

import {paginate} from "./utils";
import _ from 'lodash';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class TableComponent extends Component {
    tableHeaderList = [
        {name: "Title", path: "title"},
        {name: "Genre", path: "genre"},
        {name: "Stock", path: "numberInStock"},
        {name: "Rate", path: "dailyRentalRate"},
        {
            key: "Like",
            content: (movie) => (
                <button
                    onClick={() => {
                        likeMovie(movie._id);
                    }}
                    className="btn sm"
                >
                    {movie.liked ? (
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{cursor: "pointer"}}
                        />
                    ) : (
                        <FontAwesomeIcon icon={faHeartBroken} />
                    )}
                </button>
            ),
        },
        {
            key: "Delete",
            content: (movie) => (
                <button
                    className="btn btn-danger sm"
                    onClick={() => {
                        this.props.deleteMovie(movie._id);
                    }}
                >
                    Delete
                </button>
            ),
        },
    ];

    render() {
        const {
            moviesPerPage,
            currentPage,
            movies,
            selectedGenre,
            deleteMovie,
            likeMovie,
            sortColumn,
            sortMovie,
        } = this.props;

        var items = [...movies];

        if (selectedGenre !== "All Genres") {
            items = items.filter((item) => item.genre.name === selectedGenre);
        }

        const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);
        const moviesOnPage = paginate(sorted, currentPage, moviesPerPage);

        return (
            <div>
                <p>Showing {items.length} movies in the database.</p>
                <table className="table">
                    <TableHeader
                        tableHeaderList={this.tableHeaderList}
                        sortColumn={sortColumn}
                        sortMovie={sortMovie}
                    />
                    <TableBody
                        deleteMovie={deleteMovie}
                        likeMovie={likeMovie}
                        moviesOnPage={moviesOnPage}
                        tableHeaderList={this.tableHeaderList}
                    />
                </table>
            </div>
        );
    }
}

export default TableComponent;
