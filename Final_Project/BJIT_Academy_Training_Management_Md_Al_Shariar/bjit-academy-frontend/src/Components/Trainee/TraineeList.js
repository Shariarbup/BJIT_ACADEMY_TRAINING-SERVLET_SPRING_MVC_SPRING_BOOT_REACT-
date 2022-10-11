import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TraineeService from "../../Service/TraineeService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

const TraineeList = () => {
  const [trainees, SetTrainees] = useState([]);
  const init = () => {
    TraineeService.getAllTrainees()
      .then((response) => {
        console.log("Printing trainees data", response.data);
        SetTrainees(response.data);
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
    { dataField: "traineeId", text: "ID", sort: true },
    { dataField: "user.username", text: "Trainee ID", filter: textFilter(), sort: true },
    { dataField: "firstName", text: "First Name",sort: true },
    { dataField: "lastName", text: "Last Name",sort: true },
    { dataField: "designation", text: "Designation",sort: true },
    { dataField: "address", text: "Address",sort: true },
    { dataField: "mobile", text: "Mobile",sort: true },
  ];
  useEffect(() => {
    init();
  }, []);

  const handleDeleteTrainee = (traineeId) => {
    console.log("Printing id", traineeId);
    TraineeService.deleteTrainee(traineeId)
      .then((response) => {
        console.log("Trainee deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center">List Of Trainee</h2>
      <a className="">
        <Link className="btn btn-primary" to="/add-trainee">
          Add Trainee
        </Link>
      </a>
      <div className="container">
      <br />
      <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Trainees
        </button>
       
        <br />
        <br />
        <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">User ID: </th>
              <th scope="col">Firstname</th>
              <th scope="col">LastName</th>
              <th scope="col">Designation</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile</th>
              <th scope="col">Batch</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {trainees?.map((trainee) => (
              <tr key={trainee?.traineeId}>
                <td>{trainee?.traineeId}</td>
                <td>{trainee.user?.username}</td>
                <td>{trainee?.firstName}</td>
                <td>{trainee?.lastName}</td>
                <td>{trainee?.designation}</td>
                <td>{trainee?.address}</td>
                <td>{trainee?.mobile}</td>
                <td key={trainee?.traineeId}>{trainee.batch?.name}</td>

                <td>
                  <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/trainees/edit/${trainee.traineeId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger waves-effect btn-sm"
                    onClick={() => {
                      handleDeleteTrainee(trainee.traineeId);
                    }}
                  >
                    Delete
                  </button>
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
                  Trainees List
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
                  data={trainees}
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

export default TraineeList;
