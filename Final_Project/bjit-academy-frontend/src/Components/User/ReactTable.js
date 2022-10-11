import axios from "axios";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import 'bootstrap/dist/css/bootstrap.min.css';

// import { CSVExport } from "react-bootstrap-table2-toolkit";
// import ToolkitProvider from "react-bootstrap-table2-toolkit";

const ReactTable = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((result) => setUserList(result.data))
      .catch((error) => console.log(error));
    console.log(userList);
  }, []);
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerpage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
//   const { ExportCSVButton } = CSVExport;
//   const MyExportCSV = (props) => {
//     const handleClick = () => {
//       props.onExport();
//     };
//     return (
//       <div>
//         <button className="btn btn-success" onClick={handleClick}>
//           Export to CSV
//         </button>
//       </div>
//     );
//   };
  const columns = [
    { dataField: "id", text: "ID", sort: true },
    { dataField: "name", text: "Name", filter: textFilter() },
    { dataField: "address.street", text: "Street", filter: textFilter() },
  ];
  return (
    <div>
     
             
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={userList}
        columns={columns}
        striped
        hover
        condensed
        pagination={pagination}
        filter={filterFactory()}
        // {...props.baseProps}
      />
     

      {/* <ToolkitProvider
        keyField="id"
        data={userList}
        columns={columns}
        exportCSV
      >
        {(props) => (
        <React.Fragment>
        <MyExportCSV {...props.csvProps}/>
          <BootstrapTable
            striped
            hover
            condensed
            pagination={pagination}
            filter={filterFactory()}
            {...props.baseProps}
          />
          </React.Fragment>
        )}
      </ToolkitProvider> */}
    </div>
  );
};

export default ReactTable;
