import { Navbar } from "react-bootstrap"

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
      <header>
        <Navbar className="d-flex justify-content-between">
          <nav>
            LOGO
          </nav>
          <nav className="nav nav-link">
            LOREM
          </nav>
          <nav className="nav nav-link">
            LOREM
          </nav>
          <nav className="nav nav-link">
            LOREM
          </nav>
          <button className="btn btn-success">LOREM</button>
          <button className="btn btn-dark" >LOREM IPSUM</button>
        </Navbar>
      </header>
      <main>
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
