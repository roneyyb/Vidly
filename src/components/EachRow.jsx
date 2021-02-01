import React from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

const EachRow = (props) => {
  const { movie, likeMovie, deleteMovie, tableHeaderList } = props;
  return (
    <tr>
      {/* {tableHeaderList.map((column) => (
                <td>{column.path || column.content}</td>
            ))} */}
      <td>{movie.title}</td>
      <td>{movie.genre.name}</td>
      <td>{movie.numberInStock}</td>
      <td>{movie.dailyRentalRate}</td>
      <td>
        {
          <button
            onClick={() => {
              likeMovie(movie._id);
            }}
            className="btn sm"
          >
            {movie.liked ? (
              <FontAwesomeIcon icon={faHeart} style={{ cursor: "pointer" }} />
            ) : (
              <FontAwesomeIcon icon={faHeartBroken} />
            )}
          </button>
        }
      </td>
      <td>
        {
          <button
            className="btn btn-danger sm"
            onClick={() => {
              deleteMovie(movie._id);
            }}
          >
            Delete
          </button>
        }
      </td>
    </tr>
  );
};

export default EachRow;
