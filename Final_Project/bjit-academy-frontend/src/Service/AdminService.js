import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllAdmins = () => {
    var get_admin_config = {
        url: API_URL + "admins",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_admin_config);
};

const deleteAdmin = (adminId) => {
    console.log(adminId);
    var delete_admin_config = {
      method: 'delete',
      url: API_URL +`admins/${adminId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_admin_config);
  };
  
  const saveAdmin = (data) => {
    console.log(data);
    var save_admin_config = {
      method: 'post',
      url: API_URL + 'admins',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_admin_config);
  }; 
  
  
  const updateAdmin = (adminId,data) => {
    var update_admin_config = {
      method: 'put',
      url: API_URL +`admins/${adminId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_admin_config);
  };

  const getAdminById = (adminId) => {
    var get_admin_by_id_config = {
      method: 'get',
      url: API_URL +`admins/${adminId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_admin_by_id_config);
  };
  

  const getAdminByName = (adminName) => {
    var get_admin_by_name_config = {
      method: 'get',
      url: API_URL +`admins/profile/${adminName}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_admin_by_name_config);
  };

const AdminService ={
    getAllAdmins,
    deleteAdmin,
    saveAdmin,
    updateAdmin,
    getAdminById,
    getAdminByName
}
export default AdminService;