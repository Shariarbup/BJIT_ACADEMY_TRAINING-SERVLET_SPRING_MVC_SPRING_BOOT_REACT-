import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminService from "../../Service/AdminService";

const AdminList = () => {
  const [admins, SetAdmins] = useState([]);
  const init = () => {
    AdminService.getAllAdmins()
      .then((response) => {
        console.log("Printing Admins data", response.data);
        SetAdmins(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);

  const handleDeleteAdmin = (adminId) => {
    console.log("Printing id", adminId);
    AdminService.deleteAdmin(adminId)
      .then((response) => {
        console.log("Admin deleted successfully", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <div>
      <h2 className="text-center">List Of Admin</h2>
      <div className="container">
        <a className="">
          <Link className="btn btn-primary" to="/add-admin">
            Add Admin
          </Link>
        </a>
        {/* {role === "ROLE_ADMIN" ? (
            <a>
              <Link className="btn btn-primary" to="/add-student">
                {" "}
                Add New Student
              </Link>
            </a>
          ) : (
            ""
          )} */}
        <br />
        <br />
        <table className="table table-info table-striped table-hover table-bordered caption-top">
          <thead>
            <tr>
              <th scope="col">#ID</th>
              <th scope="col">User ID:</th>
              <th scope="col">Firstname</th>
              <th scope="col">LastName</th>
              <th scope="col">Designation</th>
              <th scope="col">Address</th>
              <th scope="col">Mobile</th>
              <th scope="col">Batch</th>
            </tr>
          </thead>
          <tbody>
            {admins?.map((admin) => (
              <tr key={admin?.adminId}>
                <td>{admin?.adminId}</td>
                <td>{admin.user?.username}</td>
                <td>{admin?.firstName}</td>
                <td>{admin?.lastName}</td>
                <td>{admin?.designation}</td>
                <td>{admin?.address}</td>
                <td>{admin?.mobile}</td>
                {/* <td>{trainer?.batch.name}</td> */}
                {/* {role === "ROLE_ADMIN" ? <td>{student?.age}</td> : ""}
                  {role === "ROLE_ADMIN" ? ( */}
                <td>
                  <Link
                    className="btn btn-outline-success waves-effect btn-sm"
                    style={{ marginRight: "5px" }}
                    to={`/admins/edit/${admin.adminId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-outline-danger waves-effect btn-sm"
                    onClick={() => {
                      handleDeleteAdmin(admin.adminId);
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

export default AdminList;
