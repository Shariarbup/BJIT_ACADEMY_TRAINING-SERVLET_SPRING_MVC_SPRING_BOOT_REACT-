import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllTrainees = () => {
  console.log("From trainee ApI config")
    var get_trainee_config = {
        url: API_URL + "trainees",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_trainee_config);
};

const deleteTrainee = (traineeId) => {
    console.log(traineeId);
    var delete_trainee_config = {
      method: 'delete',
      url: API_URL +`trainees/${traineeId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_trainee_config);
  };
  
  const saveTrainee = (data) => {
    console.log(data);
    var save_trainee_config = {
      method: 'post',
      url: API_URL + 'trainees',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_trainee_config);
  }; 
  
  
  const updateTrainee = (traineeId,data) => {
    var update_trainee_config = {
      method: 'put',
      url: API_URL +`trainees/${traineeId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_trainee_config);
  };

  const getTraineeById = (traineeId) => {
    var get_trainee_by_id_config = {
      method: 'get',
      url: API_URL +`trainees/${traineeId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_trainee_by_id_config);
  };

  const getTraineeByName = (traineeName) => {
    var get_trainee_by_name_config = {
      method: 'get',
      url: API_URL +`trainees/profile/${traineeName}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_trainee_by_name_config);
  };
  
  const getBatcheTraineesByBatchId = (batchId) => {
    var get_batch_trainees_by_batch_id_config = {
      method: 'get',
      url: API_URL +`trainees/batch/${batchId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_batch_trainees_by_batch_id_config);
  };

const TraineeService ={
    getAllTrainees,
    deleteTrainee,
    saveTrainee,
    updateTrainee,
    getTraineeById,
    getTraineeByName,
    getBatcheTraineesByBatchId
}
export default TraineeService;