import * as React from "react";
import Cell from "./Cell";

export default class TableData extends React.Component {
  renderHeadingRow = (_cell, cellIndex) => {
    const { headings } = this.props;
    return (
      <Cell
        key={headings[cellIndex].key}
        content={headings[cellIndex].value}
        header={true}
      />
    );
  };
  renderRow = (_row, rowIndex) => {
    const { headings } = this.props;
    return (
      <tr>
        {headings.map((column, i) => {
          const columnKey = column.key;
          const cell = _row[columnKey];

          if (cell) {
            return <Cell key={`ROW_${rowIndex}_COL_${i}`} content={cell} />;
          } else {
            return <Cell />;
          }
        })}
      </tr>
    );
  };

  render() {
    const { headings, rows } = this.props;
    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
    const theadMarkup = (
      <tr key="heading">{headings.map(this.renderHeadingRow)}</tr>
    );

    const tbodyMarkup = rows.map(this.renderRow);

    return (
      <>
        <table className="Table">
          <thead>{theadMarkup}</thead>
          <tbody>{tbodyMarkup}</tbody>
        </table>
      </>
    );
  }
}
