import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import TraineeService from "../../Service/TraineeService";

const TraineeProfile = () => {
  const [traineeProfile, setTraineeProfile] = useState([]);
  const traineeUserName = localStorage.getItem('username');
  const role = localStorage.getItem("roles");

  const init = () => {
    TraineeService.getTraineeByName(traineeUserName)
      .then((response) => {
        console.log("Printing trainees data", response.data);
        setTraineeProfile(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container col-md-6 offset-md-3">
        <div className="row">
          <div className="card " style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Card image"
            />
            <div className="card-body p-2">
              <div className="row">
                <div className="col-md-6 h4">User ID: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeUserName} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">First Name:</div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeProfile.firstName} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Last Name: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeProfile.lastName} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Email: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeProfile.email} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Address: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeProfile.address} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Mobile: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeProfile.mobile} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Designation: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={traineeProfile.designation} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Role: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={role} readOnly></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TraineeProfile