import React from "react";
import { TableColumn, Label } from "@ui5/webcomponents-react";

function TableHeader() {
  return (
    <>
      <TableColumn style={{ width: "12rem" }}>
        <Label>Image</Label>
      </TableColumn>
      <TableColumn
        minWidth={200}
        style={{ width: "12rem" }}
        popinText="Address"
      >
        <Label>Address</Label>
      </TableColumn>
      <TableColumn demandPopin style={{ width: "8rem" }} popinText="Price">
        <Label>Price</Label>
      </TableColumn>
      <TableColumn
        demandPopin
        minWidth={600}
        style={{ width: "12rem" }}
        popinText="Special Features"
      >
        <Label>Special Features</Label>
      </TableColumn>
      <TableColumn
        minWidth={600}
        style={{ width: "12rem" }}
        popinText="Characteristics"
      >
        <Label>Characteristics</Label>
      </TableColumn>
    </>
  );
}

export default TableHeader;
