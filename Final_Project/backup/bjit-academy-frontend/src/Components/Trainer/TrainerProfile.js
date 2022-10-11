import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import TrainerService from "../../Service/TrainerService";

const TrainerProfile = () => {
    const [trainerProfile, setTrainerProfile] = useState([]);
    const trainerUserName = localStorage.getItem('username');
    const role = localStorage.getItem("roles");
    const init = () => {
      TrainerService.getTrainerByName(trainerUserName)
        .then((response) => {
          console.log("Printing trainers data", response.data);
          setTrainerProfile(response.data);
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
                  <input type="text" value={trainerUserName} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">First Name:</div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={trainerProfile.firstName} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Last Name: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={trainerProfile.lastName} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Email: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={trainerProfile.email} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Address: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={trainerProfile.address} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Mobile: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={trainerProfile.mobile} readOnly></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 h4">Designation: </div>
                <div className="col-md-6" style={{ color: "red" }}>
                  <input type="text" value={trainerProfile.designation} readOnly></input>
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

export default TrainerProfile