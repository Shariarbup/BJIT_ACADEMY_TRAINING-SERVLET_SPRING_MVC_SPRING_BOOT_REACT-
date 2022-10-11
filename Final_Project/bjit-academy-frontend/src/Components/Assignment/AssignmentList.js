import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import AssignmentService from "../../Service/AssignmentService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

const AssignmentList = () => {
    const role = localStorage.getItem("roles");
    const [assignments, SetAssignments] = useState([]);
    const init = () => {
      AssignmentService.getAllAssignments()
        .then((response) => {
          console.log("Printing assignments data", response.data);
          SetAssignments(response.data);
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
      { dataField: "assignmentId", text: "ID", sort: true },
      { dataField: "title", text: "Assignment Title", sort: true },
      { dataField: "description", text: "Assignment Description",sort: true },
      { dataField: "submissionDate", text: "Submission Date",sort: true },
      { dataField: "assignmentMark", text: "Assignment Mark",sort: true },
      { dataField: "batch.name", text: "Batch Name",sort: true, filter: textFilter() },
    ];
    useEffect(() => {
      init();
    }, []);
  
    const handleDeleteAssignment = (assignmentId) => {
      console.log("Printing id", assignmentId);
      AssignmentService.deleteAssignment(assignmentId)
        .then((response) => {
          console.log("Assignment deleted successfully", response.data);
          init();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
  
    return (
      <div>
        <h2 className="text-center">List Of Assignment</h2>
        {role === "ROLE_ADMIN" || role === "ROLE_TRAINER"?
            <Link className="btn btn-primary" to="/add-assignment">
              Add Assignment
            </Link>
         :""}
        <div className="container">
          <br/>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Assignments
        </button>
          <br />
          <br />
          <table className="table table-info table-striped table-hover table-bordered caption-top">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Submission Date</th>
                <th scope="col">Assignment Mark</th>
                <th scope="col">Batch</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {assignments?.map((assignment) => (
                <tr key={assignment?.assignmentId}>
                  <td>{assignment?.assignmentId}</td>
                  <td>{assignment?.title}</td>
                  <td>{assignment?.description}</td>
                  <td>{assignment?.submissionDate}</td>
                  <td>{assignment?.assignmentMark}</td>
                  <td>{assignment.batch?.name}</td>
                  {role === "ROLE_TRAINEE" ?
                  <td> 
                      <Link className="btn btn-success btn-lg" to="/add-assignmentMark">
                      Submit Assignment
                      </Link>
                
                  </td>
                  :
                  <td>
                    <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/assignments/edit/${assignment.assignmentId}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-outline-danger waves-effect btn-sm"
                      onClick={() => {
                        handleDeleteAssignment(assignment.assignmentId);
                      }}
                    >
                      Delete
                    </button>
                  </td> }
                  
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
                  Assignments List
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
                  data={assignments}
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
}

export default AssignmentList