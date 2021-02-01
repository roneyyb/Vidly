import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.sortMovie(sortColumn);
  };

  render() {
    const { tableHeaderList } = this.props;
    return (
      <thead>
        <tr>
          {tableHeaderList.map((attribute, index) => {
            if (attribute.name) {
              return (
                <th
                  onClick={() => {
                    this.raiseSort(attribute.path);
                  }}
                  key={attribute.name || attribute.key}
                >
                  {attribute.name}
                </th>
              );
            } else {
              return <th>{attribute.content}</th>;
            }
          })}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
