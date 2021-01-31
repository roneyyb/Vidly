import React from "react";
import _ from "lodash";

const EachRow = (props) => {
    const {movie, likeMovie, tableHeaderList} = props;
    return (
        <tr>
            {/* {tableHeaderList.map((column) => (
                <td>{column.path || column.content}</td>
            ))} */}
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td></td>
            <td></td>
        </tr>
    );
};

export default EachRow;
