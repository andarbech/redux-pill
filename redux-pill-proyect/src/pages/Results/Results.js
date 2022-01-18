import Search from "../../components/Search"
import Filter from "../../components/Filter"
import Properties from "../../components/Properties"

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
        <Properties />
      </main>
    </>
  )
}
export default Results
