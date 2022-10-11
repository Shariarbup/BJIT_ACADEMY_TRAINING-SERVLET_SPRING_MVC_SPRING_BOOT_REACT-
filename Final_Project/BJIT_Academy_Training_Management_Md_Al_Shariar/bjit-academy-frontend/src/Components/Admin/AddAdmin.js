import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminService from "../../Service/AdminService";

const AddAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();
  const { adminId } = useParams();

  const saveAdminForm = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    const admin = {
      firstName,
      lastName,
      mobile,
      email,
      address,
      designation,
      user,
    };
    if (adminId) {
      //update admin
      AdminService.updateAdmin(adminId, admin)
        .then((response) => {
          console.log("Admin data updated successfully", response.data);
          navigate("/admins");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create admin
      AdminService.saveAdmin(admin)
        .then((response) => {
          console.log("Admin added successfully", response.data);
          navigate("/admins");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };
  useEffect(() => {
    if (adminId) {
      AdminService.getAdminById(adminId)
        .then((res) => {
          console.log("Admin by ID: ", res.data);
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
  }, [adminId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
        <Link
            to="/admins"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Admins
          </Link>
          {adminId ? (
            <h3 className="text-center mt-3">Update Admin</h3>
          ) : (
            <h3 className="text-center mt-3">Add Admin</h3>
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
                    placeholder="Enter Trainee password"
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
                    placeholder="Enter firstname"
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
                    placeholder="Enter lastName"
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
                    placeholder="Enter Designation."
                    required
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
                    placeholder="Enter Email"
                    required
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
                    placeholder="Enter email"
                    required
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
                    placeholder="Enter Address"
                    required
                  />
                </div>
                <br></br>
                <div className="mt-3">
                  {adminId ? (
                    <button
                      onClick={(e) => saveAdminForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => saveAdminForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                  )}
                  <Link
                    to="/admins"
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

export default AddAdmin;
