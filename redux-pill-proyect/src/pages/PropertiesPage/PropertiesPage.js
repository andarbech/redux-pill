import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import Search from "../../components/Search"
import FiltersForm from "../../components/FiltersForm"
import Properties from "../../components/Properties"

import { getAllProperties } from "../../redux/properties/actions";

import "./styles.css"

const Results = () => {
  const { list: filters } = useSelector((state) => state.filters);
  const { list: properties, status } = useSelector((state) => state.properties);
  const { userToken } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProperties(filters, userToken));
  }, [filters])

  return (
    <>
      <header className="header"></header>
      <main className="main">
        <Search />
        <div className="mt-5 " />
        <FiltersForm filters={filters} />
        <Properties properties={()=>console.log(properties)} />
      </main>
    </>
  )
}
export default Results
