import React from "react";
import { TableCell, TableRow, Label, Badge } from "@ui5/webcomponents-react";

function TableEntry({ item }) {
  return (
    <>
      <TableRow>
        <TableCell>
          <img src={item.imageURL} alt={item.title} />
        </TableCell>
        <TableCell>
          <Label className="address">
            {item.number} <br></br>
            {item.street} <br></br>
            {item.city} <br></br>
            {item.province} {item.country}
          </Label>
        </TableCell>
        <TableCell>
          <Label>{item.price}$</Label>
        </TableCell>
        <TableCell className="tableCell">
          {item.pet ? (
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Pets allowed
            </Badge>
          ) : (
            <Badge className="mb-1 mt-1" colorScheme={8}>
              Pets allowed
            </Badge>
          )}
          {item.lift ? (
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Lift
            </Badge>
          ) : (
            <Badge className="mb-1 mt-1" colorScheme={8}>
              Lift
            </Badge>
          )}
          {item.garden ? (
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Garden
            </Badge>
          ) : (
            <Badge className="mb-1 mt-1" colorScheme={8}>
              Garden
            </Badge>
          )}
          {item.air_conditioning ? (
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Air Conditioning
            </Badge>
          ) : (
            <Badge className="mb-1 mt-1" colorScheme={8}>
              Air Conditioning
            </Badge>
          )}
          {item.swimming_pool ? (
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Swimming pool
            </Badge>
          ) : (
            <Badge className="mb-1 mt-1" colorScheme={8}>
              Swimming pool
            </Badge>
          )}
          {item.terrace ? (
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Terrace
            </Badge>
          ) : (
            <Badge className="mb-1 mt-1" colorScheme={8}>
              Terrace
            </Badge>
          )}
        </TableCell>
        <TableCell>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Room
              <span className="badge bg-secondary rounded-pill">
                {item.room}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Bath
              <span className="badge bg-secondary rounded-pill">
                {item.bath}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Size
              <span className="badge bg-secondary rounded-pill">
                {item.size}
              </span>
            </li>
          </ul>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableEntry;
