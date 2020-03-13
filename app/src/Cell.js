import * as React from "react";

export default function Cell({ content, header }) {
  const cellMarkup = header ? (
    <th className="Cell Cell-header">{content}</th>
  ) : content ? (
    <td className="Cell">{content}</td>
  ) : (
    <td>--</td>
  );

  return cellMarkup;
}
