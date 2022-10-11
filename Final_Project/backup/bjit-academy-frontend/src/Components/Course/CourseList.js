import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CourseService from "../../Service/CourseService";

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
      </div>
    );
}

export default CourseList