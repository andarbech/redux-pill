import Search from "../../components/Search"
import Filter from "../../components/Filter"
import HouseRow from "../../components/HouseRow"
import TableEntry from "../../components/TableEntry"
import { Table } from "@ui5/webcomponents-react";

import "./styles.css"
import TableHeader from "../../components/TableHeader"

const Results = () => {

  return (
    <>
      <header className="header">
      </header>
      <main className="main">
        <Search />
        <div className="mt-5 " />
        <Filter />
        <HouseRow />
        <Table
          className="tableContainer"
          columns={
            <>
              <TableHeader />
            </>
          }
        >
          <TableEntry />
        </Table>
      </main>
    </>
  )
}
export default Results
