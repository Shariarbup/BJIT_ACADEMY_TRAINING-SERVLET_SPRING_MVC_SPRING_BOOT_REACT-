import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import BatchService from "../../Service/BatchService";

const BatchList = () => {
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
  }, []);

  const handleDeleteBatch = (batchId) => {
    console.log("Printing id", batchId);
    BatchService.deleteBatch(batchId)
      .then((response) => {
        console.log("Batch deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center">List Of Batch</h2>
      <a className="">
          <Link className="btn btn-primary" to="/add-batch">
            Add Batch
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
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Trainers</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {batches?.map((batch) => (
              <tr key={batch?.batchId}>
                <td>{batch?.batchId}</td>
                <td>{batch?.name}</td>
                <td>{batch?.description}</td>
                <td>{batch?.startDate}</td>
                <td>{batch?.endDate}</td>
                <td>{batch?.trainers?.map((trainer)=>(
                 <span>
                  <span >{trainer?.firstName} </span>
                  <span>{trainer?.lastName}</span>,&nbsp;
                 </span>
                  
                  ))}</td>

{/* key={trainer?.trainerId} */}
          
                <td>
                  <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/batches/edit/${batch.batchId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger waves-effect btn-sm"
                    onClick={() => {
                      handleDeleteBatch(batch.batchId);
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
};

export default BatchList;
