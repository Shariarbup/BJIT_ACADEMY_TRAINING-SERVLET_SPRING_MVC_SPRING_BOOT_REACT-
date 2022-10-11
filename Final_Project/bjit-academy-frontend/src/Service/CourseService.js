import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllCourses = () => {
    var get_course_config = {
        url: API_URL + "courses",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_course_config);
};

const deleteCourse = (courseId) => {
    console.log(courseId);
    var delete_course_config = {
      method: 'delete',
      url: API_URL +`courses/${courseId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_course_config);
  };
  
  const saveCourse = (data) => {
    console.log(data);
    var save_course_config = {
      method: 'post',
      url: API_URL + 'courses',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_course_config);
  }; 
  
  
  const updateCourse = (courseId,data) => {
    var update_course_config = {
      method: 'put',
      url: API_URL +`courses/${courseId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_course_config);
  };

  const getCourseById = (courseId) => {
    var get_course_by_id_config = {
      method: 'get',
      url: API_URL +`courses/${courseId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_course_by_id_config);
  };

  const getCourseByTrainerBatchId = (batchId) => {
    var get_course_by_trainer_batch_id_config = {
      method: 'get',
      url: API_URL +`courses/trainerBatch/${batchId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_course_by_trainer_batch_id_config);
  };
  

const CourseService ={
    getAllCourses,
    deleteCourse,
    saveCourse,
    updateCourse,
    getCourseById,
    getCourseByTrainerBatchId
}
export default CourseService;