import { Table } from "@ui5/webcomponents-react";

import TableEntry from "../TableEntry"
import TableHeader from "../TableHeader"

const Properties = ({ properties }) => {

  return (
    <Table
      className="tableContainer"
      columns={<TableHeader />}
      onLoadMore={function noRefCheck() { }}
      onPopinChange={function noRefCheck() { }}
      onRowClick={function noRefCheck() { }}
      onSelectionChange={function noRefCheck() { }}
    >
      {/* {status == "loading"
        && <span>loading</span>
      } */}
      {/* {(properties == [])
        ? dispatch
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
  )
}
export default Properties
