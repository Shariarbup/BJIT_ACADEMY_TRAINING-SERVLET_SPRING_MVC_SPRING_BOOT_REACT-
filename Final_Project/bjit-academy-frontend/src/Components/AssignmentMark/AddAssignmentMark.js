import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssignmentService from "../../Service/AssignmentService";
import TraineeService from "../../Service/TraineeService";
import AssignmentMarkService from "../../Service/AssignmentMarkService";

const AddAssignmentMark = () => {
  const role = localStorage.getItem("roles");
  const traineUsername = localStorage.getItem("username");
  const [submissionUrl, setSubmissionUrl] = useState("");
  const [acquireMark, setAcquireMark] = useState("");
  const [traineeUsername, setTraineeUsername] = useState("");
  const [assignmentId, setAssignmeentId] = useState("");

  const navigate = useNavigate();
  const { assignmentMarkId } = useParams();
  const saveAssignmentMarkForm = (e) => {
    e.preventDefault();
    const assignment = {
      assignmentId,
    };
    const assignmentMark = {
      acquireMark,
      submissionUrl,
      traineeUsername,
      assignment,
    };
    if (assignmentMarkId) {
      //update assignment mark
      console.log("Assignment Mark", assignmentMark);
      AssignmentMarkService.updateAssignmentMark(
        assignmentMarkId,
        assignmentMark
      )
        .then((response) => {
          console.log(
            "Assignment Mark data updated successfully",
            response.data
          );
          navigate("/assignmentMarks");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create assignment
      AssignmentMarkService.saveAssignmentMark(assignmentMark)
        .then((response) => {
          console.log("Assignment Mark added successfully", response.data);
          navigate("/assignmentMarks");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  // const [trainees, SetTrainees] = useState([]);
  const [assignments, SetAssignments] = useState([]);

  // const initTrainee = () => {
  //   //Getting All Trainees
  //   TraineeService.getAllTrainees()
  //     .then((response) => {
  //       console.log("Printing Trainees data", response.data);
  //       SetTrainees(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Trainees not getting");
  //       console.log("Something went wrong", error);
  //     });
  // };
  const initAssignment = () => {
    //Getting All Assignments
    AssignmentService.getAllAssignments()
      .then((response) => {
        console.log("Printing Assignments data", response.data);
        SetAssignments(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    // initTrainee();
    initAssignment();
    if (assignmentMarkId) {
      AssignmentMarkService.getAssignmentMarkById(assignmentMarkId)
        .then((res) => {
          console.log("Assignment Mark by ID: ", res.data);
          setSubmissionUrl(res.data.submissionUrl);
          setAcquireMark(res.data.acquireMark);
          setTraineeUsername(res.data.traineeUsername);
          setAssignmeentId(res.data.assignment.title);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [assignmentMarkId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
          {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ?
          <Link
            to="/assignmentMarks"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Assignment Marks List
          </Link>:""}
          {role === "ROLE_ADMIN" ||
          role === "ROLE_TRAINER" ? (
            <h3 className="text-center mt-3">Add Assignment Mark</h3>
          ) : (
            <h3 className="text-center mt-3">Submit Your Task</h3>
          )}
          <div className="card-body">
            <div className="assignmentMark-form">
              <form className="text-left">
                  <div className="form-group">
                    <label> Trainee User ID :</label>
                    <input
                      name="traineeUsername"
                      type="text"
                      className="form-control"
                      value={traineeUsername}
                      onChange={(e) => setTraineeUsername(e.target.value)}
                      placeholder="Trainee User ID"
                      required
                    />
                  </div>
                <br></br>
                <div className="form-group text-left">
                  <label for="batch">Assignment Title:</label>
                  {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" || role === "ROLE_TRAINEE"? (
                    <select
                      className="form-control"
                      id="batch"
                      value={assignmentId}
                      onChange={(e) => setAssignmeentId(e.target.value)}
                    >
                      <option>Select Assignment: </option>
                      {assignments?.map((assignment) => (
                        <option value={assignment?.assignmentId}>
                          {assignment?.assignmentId}{" "}
                          {assignment?.title.split(5)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    ""
                  )}
                </div>
                <br></br>
                {role === "ROLE_TRAINEE" || role === "ROLE_ADMIN" ? (
                  <div className="form-group">
                    <label>Submission URL: </label>
                    <input
                      name="description"
                      type="text"
                      className="form-control"
                      value={submissionUrl}
                      onChange={(e) => setSubmissionUrl(e.target.value)}
                      placeholder="Enter URL link"
                      required
                    />
                  </div>
                ) : (
                  <div className="form-group">
                    <label>Submission URL: </label>
                    <input
                      name="description"
                      type="text"
                      className="form-control"
                      value={submissionUrl}
                      readonly
                      required
                    />
                  </div>
                )}
                <br></br>
                {role === "ROLE_ADMIN" || role === "ROLE_TRAINER" ? (
                  <div className="form-group">
                    <label> Acquire Mark: </label>
                    <input
                      name="acquireMark"
                      type="text"
                      className="form-control"
                      value={acquireMark}
                      onChange={(e) => setAcquireMark(e.target.value)}
                      placeholder="Give Assignment Mark"
                      required
                    />
                  </div>
                ) : (
                  ""
                )}
                <br></br>
                  {role === "ROLE_ADMIN" || role==="ROLE_TRAINER" ?
                <div className="mt-3">
                  <button
                    onClick={(e) => saveAssignmentMarkForm(e)}
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                  >
                    Save
                  </button>
                  <Link
                    to="/assignmentMarks"
                    className="btn btn-outline-danger waves-effect btn-sm"
                  >
                    Cancel
                  </Link>
                </div>
                :
                
               <div className="mt-3">
                  <button
                    onClick={(e) => saveAssignmentMarkForm(e)}
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                  >
                    Submit Task
                  </button>
                </div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssignmentMark;
