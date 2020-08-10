import React, {Component} from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

class Pagination extends Component {
    state = {};

    renderPageComponent = () => {
        const {changePage, totalPage, currentPage} = this.props;

        if (totalPage === 1) {
            return null;
        }
        const pageList = _.range(1, totalPage + 1);

        return pageList.map((page) => {
            let pageClass = "page-item";
            if (page === currentPage) {
                pageClass += " active";
            }
            return (
                <li className={pageClass} key={page}>
                    <button
                        className="page-link sm"
                        onClick={() => {
                            changePage(page);
                        }}
                    >
                        {page}
                    </button>
                </li>
            );
        });
    };

    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">{this.renderPageComponent()}</ul>
            </nav>
        );
    }
}

Pagination.propTypes = {
    totalPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired
};

export default Pagination;
