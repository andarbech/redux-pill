import React from "react";
import { TableCell, TableRow, Label, Badge } from "@ui5/webcomponents-react";

const TableEntry = ({ item }) => {
  const {
    image,
    bed,
    bath,
    number,
    street,
    city,
    province,
    country,
    allow_pets,
    has_air_conditioning,
    has_garden,
    has_swimming_pool,
    has_terrace,
    size
  } = item;

  return (
    <TableRow>
      <TableCell>
        <img style={{ width: "100%" }} src={image.imageURL} alt={image.alt} />
      </TableCell>
      <TableCell>
        <Label className="address">
          {number} <br />
          {street} <br />
          {city}, <br />
          {province}, {country}
        </Label>
      </TableCell>
      <TableCell>
        <Label>{item.price}$</Label>
      </TableCell>
      <TableCell className="tableCell">
        {allow_pets ? (
          <Badge className="mb-1 mt-1" colorScheme={8}>
            Pets allowed
          </Badge>
        ) : (
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Pets allowed
          </Badge>
        )}
        {has_garden ? (
          <Badge className="mb-1 mt-1" colorScheme={8}>
            Garden
          </Badge>
        ) : (
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Garden
          </Badge>
        )}
        {has_air_conditioning ? (
          <Badge className="mb-1 mt-1" colorScheme={8}>
            Air Conditioning
          </Badge>
        ) : (
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Air Conditioning
          </Badge>
        )}
        {has_swimming_pool ? (
          <Badge className="mb-1 mt-1" colorScheme={8}>
            Swimming pool
          </Badge>
        ) : (
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Swimming pool
          </Badge>
        )}
        {has_terrace ? (
          <Badge className="mb-1 mt-1" colorScheme={8}>
            Terrace
          </Badge>
        ) : (
          <Badge className="mb-1 mt-1" colorScheme={2}>
            Terrace
          </Badge>
        )}
      </TableCell>
      <TableCell>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Room
            <span className="badge bg-secondary rounded-pill">
              {bed}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Bath
            <span className="badge bg-secondary rounded-pill">
              {bath}
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Size
            <span className="badge bg-secondary rounded-pill">
              {size}
            </span>
          </li>
        </ul>
      </TableCell>
    </TableRow>
  );
}

export default TableEntry;
