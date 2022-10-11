import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import BatchService from "../../Service/BatchService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

const BatchList = () => {
  const role = localStorage.getItem("roles");
  const [batches, SetBatches] = useState([]);
  const init = () => {
    BatchService.getAllBatches()
      .then((response) => {
        console.log("Printing batches data", response.data);
        SetBatches(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

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
  const columns = [
    { dataField: "batchId", text: "ID", sort: true },
    { dataField: "name", text: "Batch Name", filter: textFilter(), sort: true },
    { dataField: "description", text: "Batch Description",sort: true },
    { dataField: "startDate", text: "startdate",sort: true },
    { dataField: "endDate", text: "endDate",sort: true },
  ];
  useEffect(() => {
    init();
  }, []);

  const handleDeleteBatch = (batchId) => {
    console.log("Printing id", batchId);
    BatchService.deleteBatch(batchId)
      .then((response) => {
        console.log("Batch deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center">List Of Batch</h2>
      {role==="ROLE_ADMIN" ?
      <a className="">
          <Link className="btn btn-primary" to="/add-batch">
            Add Batch
          </Link>
        </a>: ""}
      <div className="container">
        <br/>
      <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Batches
        </button>
        <br />
        <br />
        <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">NAME</th>
              <th scope="col">Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Trainers</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {batches?.map((batch) => (
              <tr key={batch?.batchId}>
                <td>{batch?.batchId}</td>
                <td>{batch?.name}</td>
                <td>{batch?.description}</td>
                <td>{batch?.startDate}</td>
                <td>{batch?.endDate}</td>
                <td>{batch?.trainers?.map((trainer)=>(
                 <span>
                  <span >{trainer?.firstName} </span>
                  <span>{trainer?.lastName}</span>,&nbsp;
                 </span>
                  
                  ))}</td>

{/* key={trainer?.trainerId} */}
          
                <td>
                <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/batches/trainees/${batch.batchId}`}
                  >
                    Trainees
                  </Link>
                  {role==="ROLE_ADMIN" ? 
                  <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/batches/edit/${batch.batchId}`}
                  >
                    Update
                  </Link>:""}
                  {role==="ROLE_ADMIN" ?
                  <button
                    className="btn btn-outline-danger waves-effect btn-sm"
                    onClick={() => {
                      handleDeleteBatch(batch.batchId);
                    }}
                  >
                    Delete
                  </button>:""}
                </td>
                {/* ) : (
                  ""
                )} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "80%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Batch List
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <BootstrapTable
                  bootstrap4
                  keyField="id"
                  data={batches}
                  columns={columns}
                  striped
                  hover
                  condensed
                  pagination={pagination}
                  filter={filterFactory()}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchList;
