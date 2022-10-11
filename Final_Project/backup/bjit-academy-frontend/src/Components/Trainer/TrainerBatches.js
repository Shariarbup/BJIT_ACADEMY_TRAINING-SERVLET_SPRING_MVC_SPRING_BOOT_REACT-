import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import BatchService from "../../Service/BatchService";

const TrainerBatches = () => {
  const [trainerBatches, setTrainerBatches] = useState([]);
  const trainerUserName = localStorage.getItem("username");
  const init = () => {
    BatchService.getBatchByTrainerName(trainerUserName)
      .then((response) => {
        console.log("Printing trainers batch data", response.data);
        setTrainerBatches(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <h2 className="text-center">List Of Batches:</h2>

      <div className="container">
        <br />
        <br />

        <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">Batch Name</th>
              <th scope="col">Description</th>
              <th scope="col">Start date</th>
              <th scope="col">End date</th>
              <th scope="col">Name. Of Trainers</th>
            </tr>
          </thead>
          <tbody>
            {trainerBatches?.map((batch) => (
              <tr key={batch?.batchId}>
                <td>{batch?.batchId}</td>
                <td>{batch?.name}</td>
                <td>{batch?.description}</td>
                <td>{batch?.startDate}</td>
                <td>{batch?.endDate}</td>
                <td>{batch?.trainers.map((trainer)=>(
                  <span>
                    <span>{trainer?.firstName} {trainer?.lastName}</span>
                    <span>,&nbsp;</span>
                  </span>
                ))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainerBatches;
