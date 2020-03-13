import React from "react";
import "./TableGroup.scss";
import TableData from "./TableData";
import "./TableGroup.scss";
export default class TableGroup extends React.Component {
  render() {
    const headings = [
      { key: 1, value: "Item 1" },
      { key: 2, value: "Item 2" },
      { key: 3, value: "Item 3" },
      { key: 4, value: "Item 4" },
      { key: 5, value: "Item 5" },
      { key: 6, value: "Item 6" },
      { key: "ab", value: "Item 7" },
      { key: 8, value: "Item 8" },
      { key: 9, value: "Item 9" },
      { key: 10, value: "Item 10" }
    ];
    const rows = [
      {
        1: "10",
        2: "20",
        3: "30",
        4: "40",
        6: "60",
        8: "80",
        9: "90",
        10: "100",

        ab: "70"
      },
      {
        1: "11",
        2: "21",
        3: "31",
        4: "41",
        5: "51",
        6: "61",
        ab: "71",
        8: "81",
        9: "91",
        10: "101"
      },
      {
        1: "12",
        2: "22",
        3: "32",
        4: "42",
        5: "52",
        6: "62",
        ab: "72",
        8: "82",
        9: "92",
        10: "102"
      },
      {
        1: "13",
        2: "23",
        3: "33",
        4: "43",
        5: "53",
        6: "63",
        ab: "73",
        8: "83",
        9: "93",
        10: "103"
      },
      {
        1: "14",
        2: "24",
        3: "34",
        4: "44",
        5: "54",
        6: "64",
        ab: "74",
        8: "84",
        9: "94",
        10: "104"
      }
    ];

    return (
      <>
        <TableData headings={headings} rows={rows} />
      </>
    );
  }
}
