import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllTrainers = () => {
    var get_trainer_config = {
        url: API_URL + "trainers",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_trainer_config);
};

const deleteTrainer = (trainerId) => {
    console.log(trainerId);
    var delete_trainer_config = {
      method: 'delete',
      url: API_URL +`trainers/${trainerId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_trainer_config);
  };
  
  const saveTrainer = (data) => {
    console.log(data);
    var save_trainer_config = {
      method: 'post',
      url: API_URL + 'trainers',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_trainer_config);
  }; 
  
  
  const updateTrainer = (trainerId,data) => {
    var update_trainer_config = {
      method: 'put',
      url: API_URL +`trainers/${trainerId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_trainer_config);
  };

  const getTrainerById = (trainerId) => {
    var get_trainer_by_id_config = {
      method: 'get',
      url: API_URL +`trainers/${trainerId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_trainer_by_id_config);
  };

  const getTrainerByName = (trainerName) => {
    var get_trainer_by_name_config = {
      method: 'get',
      url: API_URL +`trainers/profile/${trainerName}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_trainer_by_name_config);
  };
  

const TrainerService ={
    getAllTrainers,
    deleteTrainer,
    saveTrainer,
    updateTrainer,
    getTrainerById,
    getTrainerByName
}
export default TrainerService;