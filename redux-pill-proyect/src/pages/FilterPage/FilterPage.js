import "./styles.css";
import withLayout from "../../hoc/withLayout";
import TableHeader from "../../components/TableHeader";
import Filters from "../../components/Filters";

import { Table } from "@ui5/webcomponents-react";
import TableEntry from "../../components/TableEntry";

function FilterPage() {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-13">
          <div className="grid search">
            <div className="grid-body">
              <div className="row">
                <div className="col-md-12">
                  <Filters/>
                  <Table
                    className="tableContainer"
                    columns={
                      <>
                        <TableHeader />
                      </>
                    }
                  >
                    <TableEntry/>
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
