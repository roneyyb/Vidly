import React from "react";
import EachRow from "./EachRow.jsx";

const TableBody = (props) => {
    
    const {deleteMovie, likeMovie, moviesOnPage} = props;

    return (
        <tbody>
            {moviesOnPage.length === 0 ? (
                <p>No Movies to show on this page</p>
            ) : (
                moviesOnPage.map((movie, index) => (
                    <EachRow
                        key={movie._id}
                        movie={movie}
                        deleteMovie={deleteMovie}
                        likeMovie={likeMovie}
                    />
                ))
            )}
        </tbody>
    );
};

export default TableBody;
