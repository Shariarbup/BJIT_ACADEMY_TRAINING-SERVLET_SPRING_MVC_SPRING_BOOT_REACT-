import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../Service/AuthService";

const LoginForm = () => {
  const form = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(username, password)
      .then((res) => {
        console.log("login success", res.data);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("roles", res.data.roles[0].authority);
        navigate("/");
        window.location.reload();
      })
      .catch((message) => {
        alert("Invalid Username and Password");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
          <h3 className="text-center mt-3">Login Form</h3>
          <div className="card-body">
            <form onSubmit={handleLogin} ref={form} className="text-left">
              <div className="form-group">
                <label for="exampleInputEmail1">User ID:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter user ID"
                  onChange={onChangeUsername}
                  value={username}
                />
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={onChangePassword}
                  value={password}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
