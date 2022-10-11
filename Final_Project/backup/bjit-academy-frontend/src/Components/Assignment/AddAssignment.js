import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssignmentService from "../../Service/AssignmentService";
import BatchService from "../../Service/BatchService";

const AddAssignment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [batchName, setbatchName] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [assignmentMark, setAssignmentMark] = useState("");

  const navigate = useNavigate();
  const { assignmentId } = useParams();

  const saveAssignmentForm = (e) => {
    e.preventDefault();
    const batch = {
      name: batchName,
    };
    const assignment = {
      title,
      description,
      batch,
      submissionDate,
      assignmentMark
    };
    if (assignmentId) {
      //update assignment
      AssignmentService.updateAssignment(assignmentId, assignment)
        .then((response) => {
          console.log("Assignment data updated successfully", response.data);
          navigate("/assignments");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create assignment
      AssignmentService.saveAssignment(assignment)
        .then((response) => {
          console.log("Assignment added successfully", response.data);
          navigate("/assignments");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  //Getting All Batches
  const [batches, SetBatches] = useState([]);

  const init = () => {
    BatchService.getAllBatches()
      .then((response) => {
        console.log("Printing batches data", response.data);
        SetBatches(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
    if (assignmentId) {
      AssignmentService.getAssignmentById(assignmentId)
        .then((res) => {
          console.log("Assignment by ID: ", res.data);
          setTitle(res.data.title);
          setDescription(res.data.description);
          setAssignmentMark(res.data.assignmentMark);
          console.log(assignmentMark);
          setSubmissionDate(res.data.submissionDate);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [assignmentId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
        <Link
            to="/assignments"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Assignments
          </Link>
          {assignmentId ? (
            <h3 className="text-center mt-3">Update Assignment</h3>
          ) : (
            <h3 className="text-center mt-3">Add Assignment</h3>
          )}
          <div className="card-body">
            <div className="assignment-form">
              <form className="text-left">
                <div className="form-group text-left">
                  <label>Title: </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Title"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    name="description"
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Description"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Submission Date: </label>
                  <input
                    name="submissionDate"
                    type="date"
                    className="form-control"
                    value={submissionDate}
                    onChange={(e) => setSubmissionDate(e.target.value)}
                    placeholder="Enter Submission Date"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Assignment Mark: </label>
                  <input
                    name="assignmentMark"
                    type="text"
                    className="form-control"
                    value={assignmentMark}
                    onChange={(e) => setAssignmentMark(e.target.value)}
                    placeholder="Enter Assignment Mark"
                    required
                  />
                </div>
                <div className="form-group text-left">
                  <label for="batch">Batch:</label>
                  <select
                    className="form-control" 
                    id="batch"
                    value={batchName}
                    onChange={(e) => setbatchName(e.target.value)}
                  >
                    <option>Select Batch: </option>
                    {batches?.map((batch) => (
                      <option value={batch?.name}>{batch?.name}</option>
                    ))}
                  </select>
                </div>
                <br></br>
                <br></br>
                <div className="mt-3">
                  {assignmentId ? (
                    <button
                      onClick={(e) => saveAssignmentForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => saveAssignmentForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                  )}
                  <Link
                    to="/assignments"
                    className="btn btn-outline-danger waves-effect btn-sm"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAssignment;
