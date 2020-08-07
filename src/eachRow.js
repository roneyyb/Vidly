import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";

class EachRow extends Component {
    state = {
        liked: false,
    };

    render() {
        const { movie } = this.props;
        return (
            <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                    <button
                        onClick={() => {
                            this.setState((prevState) => ({
                                liked: !prevState.liked,
                            }));
                        }}
                        className="btn sm"
                    >
                        {this.state.liked ? (
                            <FontAwesomeIcon icon={faHeart} style={{"cursor":"pointer"}}/>
                        ) : (
                                <FontAwesomeIcon icon={faHeartBroken}/>
                        )}
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger sm"
                        onClick={() => {
                            this.props.deleteMovie(movie._id);
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default EachRow;
