import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TrainerService from "../../Service/TrainerService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

const TrainerList = () => {
  const [trainers, SetTrainers] = useState([]);
  const init = () => {
    TrainerService.getAllTrainers()
      .then((response) => {
        console.log("Printing trainers data", response.data);
        SetTrainers(response.data);
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
    { dataField: "trainerId", text: "ID", sort: true },
    {
      dataField: "user.username",
      text: "Trainer ID",
      filter: textFilter(),
      sort: true,
    },
    { dataField: "firstName", text: "First Name", sort: true },
    { dataField: "lastName", text: "Last Name", sort: true },
    { dataField: "designation", text: "Designation", sort: true },
    { dataField: "address", text: "Address", sort: true },
    { dataField: "mobile", text: "Mobile", sort: true },
  ];
  useEffect(() => {
    init();
  }, []);

  const handleDeleteTrainer = (trainerId) => {
    console.log("Printing id", trainerId);
    TrainerService.deleteTrainer(trainerId)
      .then((response) => {
        console.log("Trainer deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center">List Of Trainer</h2>
      <a className="">
        <Link className="btn btn-primary" to="/add-trainer">
          Add Trainer
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
          Filter Trainers
        </button>
        <br />
        <br />
        {trainers && trainers.length > 0 ? (
          <table className="table table-info table-striped table-hover table-bordered caption-top">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">User ID</th>
                <th scope="col">Firstname</th>
                <th scope="col">LastName</th>
                <th scope="col">Designation</th>
                <th scope="col">Address</th>
                <th scope="col">Mobile</th>
                {/* <th scope="col">Batch</th> */}
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {trainers?.map((trainer) => (
                <tr key={trainer?.trainerId}>
                  <td>{trainer?.trainerId}</td>
                  <td>{trainer.user?.username}</td>
                  <td>{trainer?.firstName}</td>
                  <td>{trainer?.lastName}</td>
                  <td>{trainer?.designation}</td>
                  <td>{trainer?.address}</td>
                  <td>{trainer?.mobile}</td>
                  {/* <td>{trainer?.batch?.name}</td> */}

                  <td>
                    <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/trainers/edit/${trainer.trainerId}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-outline-danger waves-effect btn-sm"
                      onClick={() => {
                        handleDeleteTrainer(trainer.trainerId);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "Loading"
        )}
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
                  Trainers List
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
                  data={trainers}
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

export default TrainerList;
