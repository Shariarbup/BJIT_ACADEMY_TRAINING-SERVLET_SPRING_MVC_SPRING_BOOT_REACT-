import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CourseSessionService from "../../Service/CourseSessionService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseSessionList = () => {
    const role = localStorage.getItem("roles");
    const [courseSessions, SetCourseSessions] = useState([]);
    const init = () => {
      CourseSessionService.getAllCourseSessionss()
        .then((response) => {
          console.log("Printing course sessions data", response.data);
          SetCourseSessions(response.data);
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
      { dataField: "courseSessionId", text: "ID", sort: true },
      {
        dataField: "name",
        text: "Course Session name",
        sort: true,
      },
      { dataField: "description", text: "Description", sort: true },
      { dataField: "startTime", text: "Start Time", sort: true },
      { dataField: "endTime", text: "End Time", sort: true },
      { dataField: "course.name", text: "Course Name", sort: true,filter: textFilter() },
      { dataField: "trainer.firstName", text: "Trainer FirstName", sort: true },
    ];
    useEffect(() => {
      init();
    }, []);
  
    const handleDeleteCourseSession = (courseSessionId) => {
      console.log("Printing id", courseSessionId);
      CourseSessionService.deleteCourseSession(courseSessionId)
        .then((response) => {
          console.log("Course session deleted successfully", response.data);
          init();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
  
    return (
      <div>
        <h2 className="text-center">List Of Course Sessions</h2>
        {role==="ROLE_ADMIN" || role==="ROLE_TRAINER" ?
        <a className="text-white">
            <Link className="btn btn-primary" to="/add-courseSession">
              Add Course Session
            </Link>
          </a>:""}
        <div className="container">
        <br />
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Course Sessions
        </button>
          <br />
          <br />
          <table className="table table-info table-striped table-hover table-bordered caption-top">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">NAME</th>
                <th scope="col">Description</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Course Name</th>
                <th scope="col">Trainer Name</th>
                {role==="ROLE_ADMIN" || role==="ROLE_TRAINER" ?
                <th scope="col">Action</th>:""}
              </tr>
            </thead>
            <tbody>
              {courseSessions?.map((session) => (
                <tr key={session?.courseSessionId}>
                  <td>{session?.courseSessionId}</td>
                  <td>{session?.name}</td>
                  <td>{session?.description}</td>
                  <td>{session?.startTime}</td>
                  <td>{session?.endTime}</td>
                  <td>{session?.course?.name}</td>
                  <td>{session?.trainer?.firstName} {session?.trainer?.lastName}</td>
                  {role==="ROLE_ADMIN" || role==="ROLE_TRAINER" ?
                  <td>
                    <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/courseSessions/edit/${session?.courseSessionId}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-outline-danger waves-effect btn-sm"
                      onClick={() => {
                        handleDeleteCourseSession(session?.courseSessionId);
                      }}
                    >
                      Delete
                    </button>
                  </td>:""}
    
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
                  Course Sessions List
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
                  data={courseSessions}
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

export default CourseSessionList