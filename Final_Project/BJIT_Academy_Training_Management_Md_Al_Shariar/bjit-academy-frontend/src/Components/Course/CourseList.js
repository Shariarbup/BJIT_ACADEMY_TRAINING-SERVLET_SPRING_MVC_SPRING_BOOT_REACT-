import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CourseService from "../../Service/CourseService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

const CourseList = () => {
    const [courses, SetCourses] = useState([]);
    const init = () => {
      CourseService.getAllCourses()
        .then((response) => {
          console.log("Printing courses data", response.data);
          SetCourses(response.data);
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
      { dataField: "courseId", text: "ID", sort: true },
      { dataField: "name", text: "Course Name", filter: textFilter(), sort: true },
      { dataField: "description", text: "Description",sort: true },
      { dataField: "batch.name", text: "Batch Name",sort: true,filter: textFilter()},
    ];
    useEffect(() => {
      init();
    }, []);
  
    const handleDeleteCourse = (courseId) => {
      console.log("Printing id", courseId);
      CourseService.deleteCourse(courseId)
        .then((response) => {
          console.log("Course deleted successfully", response.data);
          init();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
  
    return (
      <div>
        <h2 className="text-center">List Of Courses</h2>
        <a className="">
            <Link className="btn btn-primary" to="/add-course">
              Add Course
            </Link>
          </a>
        <div className="container">
          <br/>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Courses
        </button>
          <br />
          <br />
          <table className="table table-info table-striped table-hover table-bordered caption-top">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">NAME</th>
                <th scope="col">Description</th>
                <th scope="col">Batch</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses?.map((course) => (
                <tr key={course?.courseId}>
                  <td>{course?.courseId}</td>
                  <td>{course?.name}</td>
                  <td>{course?.description}</td>
                  <td>{course.batch?.name}</td>
                  
                  <td>
                  <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/courses/courseSessions/${course.courseId}`}
                    >
                      All sessions
                    </Link>

                    <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/courses/edit/${course.courseId}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-outline-danger waves-effect btn-sm"
                      onClick={() => {
                        handleDeleteCourse(course.courseId);
                      }}
                    >
                      Delete
                    </button>
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
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "80%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Courses List
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
                  data={courses}
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

export default CourseList