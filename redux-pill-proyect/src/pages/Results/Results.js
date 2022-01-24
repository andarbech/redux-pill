import Search from "../../components/Search"
import FiltersForm from "../../components/FiltersForm"
import Properties from "../../components/Properties"

import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import {
  getAllProperties,
} from "../../redux/filter/actions";

import "./styles.css"

const Results = () => {
  const { filters, properties, status } = useSelector((state) => state.filter);

  return (
    <>
      <header className="header">
      </header>
      <main className="main">
        <Search />
        <div className="mt-5 " />
        <FiltersForm filters={filters} />
        <Properties properties={properties} />
      </main>
    </>
  )
}
export default Results
