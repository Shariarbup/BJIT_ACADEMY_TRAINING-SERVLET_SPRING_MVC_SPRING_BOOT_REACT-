import axios from "axios";
const API_URL = "http://localhost:8082/api/v1/";

const getAllCourseSessionss = () => {
    var get_course_session_config = {
        url: API_URL + "courseSessions",
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
  return axios(get_course_session_config);
};

const deleteCourseSession = (courseSessionId) => {
    console.log(courseSessionId);
    var delete_course_session_config = {
      method: 'delete',
      url: API_URL +`courseSessions/${courseSessionId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(delete_course_session_config);
  };
  
  const saveCourseSession = (data) => {
    console.log(data);
    var save_course_session_config = {
      method: 'post',
      url: API_URL + 'courseSessions',
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
  
    return axios(save_course_session_config);
  }; 
  
  
  const updateCourseSession = (courseSessionId,data) => {
    var update_course_session_config = {
      method: 'put',
      url: API_URL +`courseSessions/${courseSessionId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(update_course_session_config);
  };

  const getCourseSessionById = (courseSessionId) => {
    var get_course_session_by_id_config = {
      method: 'get',
      url: API_URL +`courseSessions/${courseSessionId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_course_session_by_id_config);
  };

  const getCourseSessionByCourseId = (courseId) => {
    var get_course_session_by_course_id_config = {
      method: 'get',
      url: API_URL +`courseSessions/course/${courseId}`,
      headers: { 
        'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    };
    return axios(get_course_session_by_course_id_config);
  };
  

const CourseSessionService ={
    getAllCourseSessionss,
    deleteCourseSession,
    saveCourseSession,
    updateCourseSession,
    getCourseSessionById,
    getCourseSessionByCourseId
}
export default CourseSessionService;