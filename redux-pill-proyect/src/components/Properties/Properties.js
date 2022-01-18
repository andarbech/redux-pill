import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table } from "@ui5/webcomponents-react";

import {
  getAllProperties,
} from "../../redux/filter/actions";
import TableEntry from "../TableEntry"
import TableHeader from "../TableHeader"

const Properties = () => {
  const { properties } = useSelector((state) => state.filter);

  // console.log('hello', properties);

  // const dispatch = useDispatch();

  // console.log(properties)

  // properties && properties.map((property) => console.log(property.id))

  // useEffect(() => {
  //   dispatch(getAllProperties());
  // }, [dispatch]);

  return (
    <Table
      className="tableContainer"
      columns={
        <>
          <TableHeader />
        </>
      }
      onLoadMore={function noRefCheck() { }}
      onPopinChange={function noRefCheck() { }}
      onRowClick={function noRefCheck() { }}
      onSelectionChange={function noRefCheck() { }}
    >
      {properties.map((property) => {
        <TableEntry
          item={property}
          key={property.id}
        />
      })
      }
    </Table>
  )
}
export default Properties
