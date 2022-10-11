import React from "react";
import { Link } from "react-router-dom";
function Header() {
  const userName = localStorage.getItem('username');
  const role = localStorage.getItem("roles");
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <a className="navbar-brand">
            <Link className="nav-link text-white" to="/">
              BJIT Academy
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {userName === null ? "":
              <li className="nav-item active">
                <a className="" href="">
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                </a>
              </li>}
            </ul>
            <ul className="navbar-nav ">
            {}
            {userName === null ? "":
              <li className="nav-item">
                <Link
                    className="nav-link text-white"
                    to="/profile"
                    style={{ cursor: "pointer" }}
                  >
                     Profile[{role}] 
                  </Link> 
               
              </li>}
              {userName === null ?
              <li className="nav-item">
                <a className="active">
                  <Link
                    className="nav-link text-white"
                    to="/login"
                    style={{ cursor: "pointer" }}
                  >
                    Login
                  </Link>
                </a>
              </li> :
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                >
                  Logout
                </a>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
