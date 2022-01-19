import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Table } from "@ui5/webcomponents-react";

// import {
//   getAllProperties,
// } from "../../redux/filter/actions";
import TableEntry from "../TableEntry"
import TableHeader from "../TableHeader"
import { getAllProperties, setRadioFiltersMiddleware } from '../../redux/filter/actions';

const Properties = () => {
  const state=useSelector((state) => state.filter);
  const { filters, properties, status } = useSelector((state) => state.filter);
  
  
  // console.log(status)
  // const status="ok"
  // while (status === "loading") {
  //   console.log("inside")
  // }

  // for (const property in filters) {
  //   `${property}: ${filters[property]}`

  // }
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // dispatch(getAllProperties)
  //   if (status === 'ok') {
  //     dispatch(setRadioFiltersMiddleware)
  //   }
  // }, [dispatch,state]);

  return (<>

    <Table
      className="tableContainer"
      columns={<TableHeader />}
    >
      {status == "loading"
        && <span>loading</span>
      }
      {/* {(properties == [])
        ?  console.log(filters)
        : null
      } */}
      {properties.length > 0
        && properties.map((property) => (
          <TableEntry
            item={property}
            key={property.id}
          />
        ))
      }
    </Table>
    {/* {
      status === 'ok'
        ?
        console.log("andresito") : null
    } */}
    {/* filters.map((filter) => {
      console.log(filter)
    }):null */}
    {/* } */}
  </>
  )
}
export default Properties

