import React, { useEffect } from "react";
import "./styles.css";

import { useSelector, useDispatch } from "react-redux";
// import { getAllProperties } from "../../redux/search/action";

import withLayout from "../../hoc/withLayout";
import TableHeader from "../../components/TableHeader";
import TableEntry from "../../components/TableEntry";
import Filters from "../../components/Filters";

import { Table } from "@ui5/webcomponents-react";

function FilterPage() {
  // const allProperties = useSelector((state) => state.search.allProperties);
  // const searched = useSelector((state) => state.search.properties);
  // const filterState = useSelector((state) => state.filters.state);
  // const properties = useSelector((state) => state.filters.properties);
  // const filters = useSelector((state) => state.filters);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProperties());
  // }, [dispatch]);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-13">
          <div className="grid search">
            <div className="grid-body">
              <div className="row">
                <div className="col-md-12">
                  <Filters
                  // allProperties={allProperties}
                  // filterState={filterState}
                  // searched={searched}
                  // filters={filters}
                  // properties={properties}
                  />
                  <Table
                    className="tableContainer"
                    columns={
                      <>
                        <TableHeader />
                      </>
                    }
                  // onLoadMore={function noRefCheck() { }}
                  // onPopinChange={function noRefCheck() { }}
                  // onRowClick={function noRefCheck() { }}
                  // onSelectionChange={function noRefCheck() { }}
                  >

                    {/* {properties.length !== 0
                      ? properties.map((item) => {
                        return;
                      })
                      : searched.length !== 0
                        ? searched.map((item) => {
                          return <TableEntry item={item} key={item.id} />;
                        })
                        : allProperties.map((item) => {
                          return <TableEntry item={item} key={item.id} />;
                        })} */}
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLayout(FilterPage);
