import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllAssignments = () => {
    var get_assignment_config = {
        url: API_URL + "assignments",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_assignment_config);
};

const deleteAssignment = (assignmentId) => {
    console.log(assignmentId);
    var delete_assignment_config = {
      method: 'delete',
      url: API_URL +`assignments/${assignmentId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_assignment_config);
  };
  
  const saveAssignment= (data) => {
    console.log(data);
    var save_assignment_config = {
      method: 'post',
      url: API_URL + 'assignments',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_assignment_config);
  }; 
  
  
  const updateAssignment = (assignmentId,data) => {
    var update_assignment_config = {
      method: 'put',
      url: API_URL +`assignments/${assignmentId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_assignment_config);
  };

  const getAssignmentById = (assignmentId) => {
    var get_assignment_by_id_config = {
      method: 'get',
      url: API_URL +`assignments/${assignmentId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_assignment_by_id_config);
  };
  

const AssignmentService ={
    getAllAssignments,
    deleteAssignment,
    saveAssignment,
    updateAssignment,
    getAssignmentById
}
export default AssignmentService;