import React from "react";
import { TableCell, TableRow, Label, Badge } from "@ui5/webcomponents-react";

function TableEntry() {
  return (
    <>
      <TableRow>
        <TableCell>
          <img src="" alt="" />
        </TableCell>
        <TableCell>
          <Label className="address">
            500 <br></br>
            calle radom<br></br>
            BCN <br></br>
            BCN CAT
          </Label>
        </TableCell>
        <TableCell>
          <Label>500$</Label>
        </TableCell>
        <TableCell className="tableCell">
            <Badge className="mb-1 mt-1" colorScheme={2}>
              Pets allowed
          </Badge>
          
        </TableCell>
        <TableCell>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Room
              <span className="badge bg-secondary rounded-pill">
                Room
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Bath
              <span className="badge bg-secondary rounded-pill">
                bath
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Size
              <span className="badge bg-secondary rounded-pill">
              1500
              </span>
            </li>
          </ul>
        </TableCell>
      </TableRow>
    </>
  );
}

export default TableEntry;
