import React, { useState, useEffect } from "react";
import AdminService from "../../Service/AdminService";

const AdminProfile = () => {
  const [adminProfile, setAdminProfile] = useState([]);
  const adminName = localStorage.getItem("username");
  const role = localStorage.getItem("roles");
  
  useEffect(() => {
    console.log("Admin Name: ",adminName)
    const init = () => {
      AdminService.getAdminByName(adminName)
        .then((response) => {
          console.log("Printing Admins data", response.data);
          setAdminProfile(response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
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
                <input type="text" value={adminName} readOnly></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 h4">First Name:</div>
              <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={adminProfile.firstName} readOnly></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 h4">Last Name: </div>
              <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={adminProfile.lastName} readOnly></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 h4">Email: </div>
              <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={adminProfile.email} readOnly></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 h4">Address: </div>
              <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={adminProfile.address} readOnly></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 h4">Mobile: </div>
              <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={adminProfile.mobile} readOnly></input>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 h4">Designation: </div>
              <div className="col-md-6" style={{ color: "red" }}>
                <input type="text" value={adminProfile.designation} readOnly></input>
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
  );
};

export default AdminProfile;
