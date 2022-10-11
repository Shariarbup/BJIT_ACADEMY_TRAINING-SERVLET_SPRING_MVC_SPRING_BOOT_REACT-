import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import CourseSessionService from "../../Service/CourseSessionService";

const CourseSessionList = () => {
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
        <a className="text-white">
            <Link className="btn btn-primary" to="/add-courseSession">
              Add Course Session
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
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Course Name</th>
                <th scope="col">Trainer Name</th>
                <th scope="col">Action</th>
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
                  </td>
    
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default CourseSessionList