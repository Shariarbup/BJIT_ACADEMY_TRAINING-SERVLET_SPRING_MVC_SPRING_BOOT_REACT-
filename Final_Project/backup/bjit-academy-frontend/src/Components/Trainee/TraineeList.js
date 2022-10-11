import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import TraineeService from "../../Service/TraineeService";

const TraineeList = () => {
  const [trainees, SetTrainees] = useState([]);
  const init = () => {
    TraineeService.getAllTrainees()
      .then((response) => {
        console.log("Printing trainees data", response.data);
        SetTrainees(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);

  const handleDeleteTrainee = (traineeId) => {
    console.log("Printing id", traineeId);
    TraineeService.deleteTrainee(traineeId)
      .then((response) => {
        console.log("Trainee deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center">List Of Trainee</h2>
      <a className="">
          <Link className="btn btn-primary" to="/add-trainee">
            Add Trainee
          </Link>
        </a>
      <div className="container">
        <br />
        <br />
        <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">User ID: </th>
              <th scope="col">Firstname</th>
              <th scope="col">LastName</th>
              <th scope="col">Designation</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile</th>
              <th scope="col">Batch</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {trainees?.map((trainee) => (
              <tr key={trainee?.traineeId}>
                <td>{trainee?.traineeId}</td>
                <td>{trainee.user?.username}</td>
                <td>{trainee?.firstName}</td>
                <td>{trainee?.lastName}</td>
                <td>{trainee?.designation}</td>
                <td>{trainee?.address}</td>
                <td>{trainee?.mobile}</td>
                <td key={trainee?.traineeId}>{trainee.batch?.name}</td>
                
                <td>
                  <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/trainees/edit/${trainee.traineeId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger waves-effect btn-sm"
                    onClick={() => {
                      handleDeleteTrainee(trainee.traineeId);
                    }}
                  >
                    Delete
                  </button>
                </td>
                {/* ) : (
                  ""
                )} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TraineeList