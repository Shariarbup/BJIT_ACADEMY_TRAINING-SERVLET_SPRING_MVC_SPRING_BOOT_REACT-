import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminService from "../../Service/AdminService";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerpage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  const columns = [
    { dataField: "adminId", text: "ID", sort: true },
    { dataField: "user.username", text: "Trainee ID", filter: textFilter(), sort: true },
    { dataField: "firstName", text: "First Name",sort: true },
    { dataField: "lastName", text: "Last Name",sort: true },
    { dataField: "designation", text: "Designation",sort: true },
    { dataField: "address", text: "Address",sort: true },
    { dataField: "mobile", text: "Mobile",sort: true },
  ];
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
        <br /><br/>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          m-3
        >
          Filter Admins
        </button>
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
      <div className="container">
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: "80%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Admins List
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <BootstrapTable
                  bootstrap4
                  keyField="id"
                  data={admins}
                  columns={columns}
                  striped
                  hover
                  condensed
                  pagination={pagination}
                  filter={filterFactory()}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminList;
