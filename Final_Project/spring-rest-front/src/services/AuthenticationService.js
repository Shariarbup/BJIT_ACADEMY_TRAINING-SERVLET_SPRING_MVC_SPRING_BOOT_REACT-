import axios from "axios";
const API_URL = "http://localhost:8080/";

const login = (username, password) => {
    var qs = require('qs');
    var data = qs.stringify({
        'username': username,
        'password': password 
      });
      var config = {
        method: 'post',
        url: 'http://localhost:8080/login',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };
      
      return axios(config);
  }


  const AuthService = {
    login,
  }
  export default AuthService;