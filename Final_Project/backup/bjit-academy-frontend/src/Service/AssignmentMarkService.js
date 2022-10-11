import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllAssignmentMarks = () => {
    var get_assignment_mark_config = {
        url: API_URL + "assignmentMarks",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_assignment_mark_config);
};

const deleteAssignmentMark = (assignmentMarkId) => {
    console.log(assignmentMarkId);
    var delete_assignment_mark_config = {
      method: 'delete',
      url: API_URL +`assignmentMarks/${assignmentMarkId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_assignment_mark_config);
  };
  
  const saveAssignmentMark= (data) => {
    console.log(data);
    var save_assignment_mark_config = {
      method: 'post',
      url: API_URL + 'assignmentMarks',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_assignment_mark_config);
  }; 
  
  
  const updateAssignmentMark = (assignmentMarkId,data) => {
    var update_assignment_mark_config = {
      method: 'put',
      url: API_URL +`assignmentMarks/${assignmentMarkId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_assignment_mark_config);
  };

  const getAssignmentMarkById = (assignmentMarkId) => {
    var get_assignment_mark_by_id_config = {
      method: 'get',
      url: API_URL +`assignmentMarks/${assignmentMarkId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_assignment_mark_by_id_config);
  };
  

const AssignmentMarkService ={
    getAllAssignmentMarks,
    deleteAssignmentMark,
    saveAssignmentMark,
    updateAssignmentMark,
    getAssignmentMarkById
}
export default AssignmentMarkService;