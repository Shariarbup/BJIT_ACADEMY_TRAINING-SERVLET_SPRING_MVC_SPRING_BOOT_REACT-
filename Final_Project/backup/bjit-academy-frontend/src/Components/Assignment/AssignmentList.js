import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import AssignmentService from "../../Service/AssignmentService";

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
      </div>
    );
}

export default AssignmentList