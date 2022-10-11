import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import TrainerService from '../../Service/TrainerService';

const TrainerList = () => {
    const [trainers, SetTrainers] = useState([]);
    const init = () => {
      TrainerService.getAllTrainers()
        .then((response) => {
          console.log("Printing trainers data", response.data);
          SetTrainers(response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
    useEffect(() => {
      init();
    }, []);
  
    const handleDeleteTrainer = (trainerId) => {
      console.log("Printing id", trainerId);
      TrainerService.deleteTrainer(trainerId)
        .then((response) => {
          console.log("Trainer deleted successfully", response.data);
          init();
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
  
    return (
      <div>
        <h2 className="text-center">List Of Trainer</h2>
        <a className="">
          <Link className="btn btn-primary" to="/add-trainer">
            Add Trainer
          </Link>
        </a>
        <div className="container">
          <br />
          <br />
         { trainers && trainers.length>0 ?
          <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">User ID</th>
              <th scope="col">Firstname</th>
              <th scope="col">LastName</th>
              <th scope="col">Designation</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile</th>
              {/* <th scope="col">Batch</th> */}
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            {trainers?.map((trainer) => (
              <tr key={trainer?.trainerId}>
                <td>{trainer?.trainerId}</td>
                <td>{trainer.user?.username}</td>
                <td>{trainer?.firstName}</td>
                <td>{trainer?.lastName}</td>
                <td>{trainer?.designation}</td>
                <td>{trainer?.address}</td>
                <td>{trainer?.mobile}</td>
                {/* <td>{trainer?.batch?.name}</td> */}
    
                <td>
                  <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/trainers/edit/${trainer.trainerId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger waves-effect btn-sm"
                    onClick={() => {
                      handleDeleteTrainer(trainer.trainerId);
                    }}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>:"Loading"

         }
        </div>
      </div>
    );
}

export default TrainerList