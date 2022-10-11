import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BatchService from "../../Service/BatchService";
import TrainerService from "../../Service/TrainerService";

const AddBatch = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [trainerName, setTrainerName] = useState([]);

  const navigate = useNavigate();
  const { batchId } = useParams();

  const saveBatchForm = (e) => {
    console.log("Trainer name :", trainerName);
    e.preventDefault();
    const batch = {
      name,
      description,
      startDate,
      endDate,
    };
    if (batchId) {
      //update batch
      BatchService.updateBatch(batchId, batch)
        .then((response) => {
          console.log("Batch data updated successfully", response.data);
          navigate("/batches");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create batch
      BatchService.saveBatch(batch, trainerName)
        .then((response) => {
          console.log("Batch added successfully", response.data);
          navigate("/batches");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  //Getting All Batches
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
    if (batchId) {
      BatchService.getBatchById(batchId)
        .then((res) => {
          console.log("Batch by ID: ", res.data);
          setName(res.data.name);
          setDescription(res.data.description);
          setStartDate(res.data.startDate);
          setEndDate(res.data.endDate);
          setTrainerName(res.data.trainers);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [batchId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
        <Link
            to="/batches"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Batches
          </Link>
          {batchId ? (
            <h3 className="text-center mt-3">Update Batch</h3>
          ) : (
            <h3 className="text-center mt-3">Add Batch</h3>
          )}
          <div className="card-body">
            <div className="batch-form">
              <form className="text-left">
                <div className="form-group text-left">
                  <label>Batch Name: </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    required
                  />
                </div>{" "}
                <br></br>
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Description"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Start Date: </label>
                  <input
                    name="startdate"
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>End Date: </label>
                  <input
                    name="endDate"
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group text-left">
                  <label for="trainer">Trainers:</label>
                  <select
                    className="form-control"
                    id="trainer"
                    value={trainerName}
                    onChange={(e) => {
                      setTrainerName(e.target.value);
                    }}
                  >
                    <option>Select Trainer: </option>
                    {trainers?.map((trainer) => (
                      <option
                        key={trainer?.trainerId}
                        value={trainer?.lastName}
                      >
                        {trainer?.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <br></br>
                <div className="mt-3">
                  {batchId ? (
                    <button
                      onClick={(e) => saveBatchForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => saveBatchForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                  )}
                  <Link
                    to="/batches"
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

export default AddBatch;
