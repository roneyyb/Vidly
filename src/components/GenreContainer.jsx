import React, {Component} from "react";
import PropTypes from "prop-types";

class GenreContainer extends Component {
    render() {
        const {genreList, selectedGenre, changeGenre} = this.props;
        return (
                <ul className="list-group">
                    {genreList.map((genre) => {
                        let className = "list-group-item";
                        if (genre.name === selectedGenre) {
                            className += " active";
                        }
                        return (
                            <li
                                key={genre._id}
                                className={className}
                                onClick={() => {
                                    changeGenre(genre.name);
                                }}
                            >
                                {genre.name}
                            </li>
                        );
                    })}
                </ul>
        );
    }
}

GenreContainer.propTypes = {
    genreList: PropTypes.array.isRequired,
    selectedGenre: PropTypes.string.isRequired,
    changeGenre: PropTypes.func.isRequired,
};

// GenreContainer.defaultProps = {

// }

export default GenreContainer;
