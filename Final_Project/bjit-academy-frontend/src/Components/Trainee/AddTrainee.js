import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BatchService from "../../Service/BatchService";
import TraineeService from "../../Service/TraineeService";

const AddTrainee = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, SetBatchName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();
  const { traineeId } = useParams();

  const saveTraineeForm = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const batch = {
      name,
    };
    const trainee = {
      firstName,
      lastName,
      mobile,
      email,
      address,
      designation,
      user,
      batch,
    };
    if (traineeId) {
      //update trainee
      TraineeService.updateTrainee(traineeId, trainee)
        .then((response) => {
          console.log("Trainee data updated successfully", response.data);
          navigate("/trainees");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create trainee
      TraineeService.saveTrainee(trainee)
        .then((response) => {
          console.log("Trainee added successfully", response.data);
          navigate("/trainees");
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
    if (traineeId) {
      TraineeService.getTraineeById(traineeId)
        .then((res) => {
          console.log("Trainee by ID: ", res.data);
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setDesignation(res.data.designation);
          setEmail(res.data.email);
          setMobile(res.data.mobile);
          setAddress(res.data.address);
          setUsername(res.data.user?.username);
          setPassword(res.data.user?.password);
          SetBatchName(res.data.batch?.name);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [traineeId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
        <Link to='/trainees' className="text white btn btn-info btn-lg btn-block mt-2">Trainees</Link>
        {traineeId ? 

          <h3 className="text-center mt-3">Update Trainee</h3>
          :
          <h3 className="text-center mt-3">Add Trainee</h3>
        }
          <div className="card-body">
            <div className="batch-form">
              <form className="text-left">
                <div className="form-group text-left">
                  <label>User ID: </label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Trainee ID"
                    required
                  />
                </div>
                <br></br>

                <div className="form-group text-left">
                  <label>password: </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Trainee password"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group text-left">
                  <label for="batch">Batch:</label>
                  <select
                    className="form-control"
                    id="batch"
                    value={name}
                    onChange={(e) => SetBatchName(e.target.value)}
                  >
                    <option>Select Batch: </option>
                    {batches?.map((batch) => (
                      <option  value={batch?.name}>{batch?.name}</option>
                    ))}
                  </select>
                </div>
                <br></br>
                <div className="form-group text-left">
                  <label>First Name: </label>
                  <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter Firstname"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Last Name: </label>
                  <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter LastName"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Designation: </label>
                  <input
                    name="designation"
                    type="text"
                    className="form-control"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                    placeholder="Enter Designation"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Email: </label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter Email"
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Mobile: </label>
                  <input
                    name="mobile"
                    type="text"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    placeholder="Enter Mobile No."
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Address: </label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder="Enter Address"
                  />
                </div>
                <br></br>
                <div className="mt-3">
                  {traineeId ? 
                  <button
                    onClick={(e) => saveTraineeForm(e)}
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                  >
                    Update
                  </button>
                   :
                  <button
                    onClick={(e) => saveTraineeForm(e)}
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                  >
                    Save
                  </button>
                  }
                  <Link
                    to="/trainees"
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

export default AddTrainee;
