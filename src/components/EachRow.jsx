import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import _ from 'lodash';

const EachRow = (props) => {

        const { movie, likeMovie, tableHeaderList } = props;
        return (
            <tr>
                {tableHeaderList.map(column) => (
                <td>{column.path}</td>
                )}
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                   
                </td>
                <td>
                    
                </td>
            </tr>
        );
}

export default EachRow;
