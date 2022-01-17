import { Navbar } from "react-bootstrap"

import Search from "../../components/Search"
import Filter from "../../components/Filter"
import HouseRow from "../../components/HouseRow"
import TableEntry from "../../components/TableEntry"

import "./styles.css"

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
        <div className="container">
          <Search />
          <div className="mt-5 " />
          <Filter />
          <HouseRow />
          <TableEntry />
        </div>
      </main>
    </>
  )
}
export default Results
