import { Table } from "@ui5/webcomponents-react";

import Search from "../../components/Search"
import Filter from "../../components/Filter"
import TableEntry from "../../components/TableEntry"
import TableHeader from "../../components/TableHeader"

import "./styles.css"

const Results = () => {

  return (
    <>
      <header className="header">
      </header>
      <main className="main">
        <Search />
        <div className="mt-5 " />
        <Filter />
        <Table
          className="tableContainer"
          columns={<TableHeader />}
        >
          <TableEntry />
        </Table>
      </main>
    </>
  )
}
export default Results
