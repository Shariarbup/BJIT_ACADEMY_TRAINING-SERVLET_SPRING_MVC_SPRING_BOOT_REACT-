import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllBatches = () => {
    var get_batch_config = {
        url: API_URL + "batches",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_batch_config);
};

const deleteBatch = (batchId) => {
    console.log(batchId);
    var delete_batch_config = {
      method: 'delete',
      url: API_URL +`batches/${batchId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_batch_config);
  };
  
  const saveBatch = (data,traninerName) => {
    console.log(data);
    var save_batch_config = {
      method: 'post',
      url: API_URL + `batches/${traninerName}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_batch_config);
  }; 
  
  
  const updateBatch = (batchId,data) => {
    var update_batch_config = {
      method: 'put',
      url: API_URL +`batches/${batchId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_batch_config);
  };

  const getBatchById = (batchId) => {
    var get_batch_by_id_config = {
      method: 'get',
      url: API_URL +`batches/${batchId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_batch_by_id_config);
  };

  const getBatchByTrainerName = (trainerUsername) => {
    var get_batch_by_trainer_name_config = {
      method: 'get',
      url: API_URL +`batches/trainer/${trainerUsername}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_batch_by_trainer_name_config);
  };
  

const BatchService ={
    getAllBatches,
    deleteBatch,
    saveBatch,
    updateBatch,
    getBatchById,
    getBatchByTrainerName
}
export default BatchService;