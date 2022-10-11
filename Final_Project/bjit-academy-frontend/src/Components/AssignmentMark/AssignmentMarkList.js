import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";
import AssignmentMarkService from "../../Service/AssignmentMarkService";

const AssignmentMarkList = () => {
  const role = localStorage.getItem("roles");
  const [assignmentMarks, SetAssignmentMarks] = useState([]);
  const init = () => {
    AssignmentMarkService.getAllAssignmentMarks()
      .then((response) => {
        console.log("Printing assignments marks data", response.data);
        SetAssignmentMarks(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  //React BootStrap table
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
    { dataField: "assignmentMarkId", text: "ID", sort: true },
    { dataField: "traineeUsername", text: "Trainee ID", filter: textFilter(), sort: true },
    { dataField: "assignment.assignmentId", text: "Assignment ID", sort: true },
    { dataField: "assignment.title", text: "Assignment Title", sort: true },
    { dataField: "assignment.description", text: "Assignment Description", sort: true },
    { dataField: "assignment.submissionDate", text: "Submission Date", sort: true },
    { dataField: "assignment.assignmentMark", text: "Assignment Mark", sort: true },
    { dataField: "acquireMark", text: "Acquire Mark", sort: true },
    { dataField: "submissionUrl", text: "Submission URL", sort: true },
  ];
  useEffect(() => {
    init();
  }, []);

  const handleDeleteAssignmentMark = (assignmentMarkId) => {
    console.log("Printing id", assignmentMarkId);
    AssignmentMarkService.deleteAssignmentMark(assignmentMarkId)
      .then((response) => {
        console.log("Assignment Mark deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center mt-3">List Of Assignment Mark</h2>
      {/* {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ?
            <Link className="btn btn-primary" to="/add-assignmentMark">
              Add Assignment Mark
            </Link>
         :""} */}

      {role === "ROLE_TRAINEE" ? (
        <Link className="btn btn-primary" to="/add-assignmentMark">
          Submit Assignment Task
        </Link>
      ) : (
        ""
      )}
      <div className="container">
        <br/>
        {role === "ROLE_ADMIN" || role==="ROLE_TRAINER" ?
      <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Assignment Mark
        </button>:""}
        <br /><br/>
        <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Trainee ID: </th>
              <th scope="col">Assignment ID: </th>
              <th scope="col">Assignment Title: </th>
              <th scope="col">Assignment Description: </th>
              <th scope="col">Submission Date</th>
              <th scope="col">Total Mark</th>
              <th scope="col">Aquired Mark</th>
              <th scope="col">Submitted URL</th>
              {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ? (
                <th scope="col">Action</th>
              ) : (
                ""
              )}
            </tr>
          </thead>
          <tbody>
            {assignmentMarks?.map((assignmentMark) => (
              <tr key={assignmentMark?.assignmentMarkId}>
                <td>{assignmentMark?.assignmentMarkId}</td>
                <td>{assignmentMark?.traineeUsername}</td>
                <td>{assignmentMark?.assignment?.assignmentId}</td>
                <td>{assignmentMark?.assignment?.title}</td>
                <td>{assignmentMark?.assignment?.description}</td>
                <td>{assignmentMark?.assignment?.submissionDate}</td>
                <td>{assignmentMark?.assignment?.assignmentMark}</td>
                <td>{assignmentMark?.acquireMark}</td>
                <td>{assignmentMark?.submissionUrl}</td>
                <td>
                  {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ? (
                    <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/assignmentMarks/edit/${assignmentMark.assignmentMarkId}`}
                    >
                      Update
                    </Link>
                  ) : (
                    ""
                  )}
                  {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ? (
                    <button
                      className="btn btn-outline-danger waves-effect btn-sm"
                      onClick={() => {
                        handleDeleteAssignmentMark(
                          assignmentMark.assignmentMarkId
                        );
                      }}
                    >
                      Delete
                    </button>
                  ) : (
                    ""
                  )}
                </td>
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
          <div className="modal-dialog" role="document" style={{ maxWidth: "80%" }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Assignment Mark List
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
                  data={assignmentMarks}
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

export default AssignmentMarkList;
