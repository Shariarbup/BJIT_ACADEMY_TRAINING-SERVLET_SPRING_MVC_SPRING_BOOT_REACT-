import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
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

         {role === "ROLE_TRAINEE" ?
          <Link className="btn btn-primary" to="/add-assignmentMark">
          Submit Assignment Task
        </Link>
         :
          ""
         }
        <div className="container">
          <br />
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
                {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ?
                <th scope="col">Action</th>
                :""}
              </tr>
            </thead>
            <tbody>
              {
              assignmentMarks?.map((assignmentMark) => (
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
                  {role === "ROLE_ADMIN" || role === "ROLE_TRAINER"?
                    <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/assignmentMarks/edit/${assignmentMark.assignmentMarkId}`}
                    >
                      Update
                    </Link>
                    :
                   ""
                    
                    }
                    {role === "ROLE_ADMIN" || role === "ROLE_TRAINER"?
                    <button
                      className="btn btn-outline-danger waves-effect btn-sm"
                      onClick={() => {
                        handleDeleteAssignmentMark(assignmentMark.assignmentMarkId);
                      }}
                    >
                      Delete
                    </button> :""}
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default AssignmentMarkList