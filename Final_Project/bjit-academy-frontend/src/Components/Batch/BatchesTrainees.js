import React from 'react'
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TraineeService from '../../Service/TraineeService';

const BatchesTrainees = () => {
  const { batchId } = useParams();
    const[batchTrainees, setBatchTrainees] = useState([]);
    const init = () => {
        TraineeService.getBatcheTraineesByBatchId(batchId)
          .then((response) => {
            console.log("Printing Batch Trainees data", response.data);
            setBatchTrainees(response.data);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };
      useEffect(() => {
        init();
      }, [batchId]);
  return (
    <div>
        <div className='container'>
          <h1>Trainees Under Batch</h1>
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
            </tr>
          </thead>
          <tbody>
            {batchTrainees?.map((trainee) => (
              <tr key={trainee?.traineeId}>
                <td>{trainee?.traineeId}</td>
                <td>{trainee.user?.username}</td>
                <td>{trainee?.firstName}</td>
                <td>{trainee?.lastName}</td>
                <td>{trainee?.designation}</td>
                <td>{trainee?.address}</td>
                <td>{trainee?.mobile}</td>
                <td key={trainee?.traineeId}>{trainee.batch?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default BatchesTrainees