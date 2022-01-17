import "./styles.css";
import { Navbar } from "react-bootstrap";
import Search from "../../Search";
import Filter from "../../Filter";
const Results = () => {
  return (
    <>
      <header>
        <Navbar className="d-flex justify-content-between">
          <nav>LOGO</nav>
          <nav className="nav nav-link">LOREM</nav>
          <nav className="nav nav-link">LOREM</nav>
          <nav className="nav nav-link">LOREM</nav>
          <button className="btn btn-success">LOREM</button>
          <button className="btn btn-dark">LOREM IPSUM</button>
        </Navbar>
      </header>
      <main>
        {/* <div className="container"> */}
        <Search />
        <div className="mt-5 " />
        <Filter />
        {/* </div> */}
      </main>
    </>
  );
};
export default Results;
