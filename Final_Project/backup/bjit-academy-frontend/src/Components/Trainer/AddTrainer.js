import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrainerService from "../../Service/TrainerService";

const AddTrainer = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();
  const { trainerId } = useParams();

  const saveTrainerForm = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const trainer = {
      firstName,
      lastName,
      mobile,
      email,
      address,
      designation,
      user,
    };
    if (trainerId) {
      //update trainee
      TrainerService.updateTrainer(trainerId, trainer)
        .then((response) => {
          console.log("Trainer data updated successfully", response.data);
          navigate("/trainers");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create trainee
      TrainerService.saveTrainer(trainer)
        .then((response) => {
          console.log("Trainer added successfully", response.data);
          navigate("/trainers");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (trainerId) {
      TrainerService.getTrainerById(trainerId)
        .then((res) => {
          console.log("Trainer by ID: ", res.data);
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setDesignation(res.data.designation);
          setEmail(res.data.email);
          setMobile(res.data.mobile);
          setAddress(res.data.address);
          setUsername(res.data.user?.username);
          setPassword(res.data.user?.password);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [trainerId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
          <Link
            to="/trainers"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Trainers
          </Link>
          {trainerId ? (
            <h3 className="text-center mt-3">Update Trainer</h3>
          ) : (
            <h3 className="text-center mt-3">Add Trainer</h3>
          )}
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
                    placeholder="Enter Trainer password"
                    required
                  />
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
                    placeholder="Enter Mobile"
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
                    placeholder="Enter Address."
                  />
                </div>
                <br></br>
                <div className="mt-3">
                  {trainerId ? (
                    <button
                      onClick={(e) => saveTrainerForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => saveTrainerForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                  )}
                  <Link
                    to="/trainers"
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

export default AddTrainer;
