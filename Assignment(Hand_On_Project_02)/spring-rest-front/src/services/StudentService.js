import axios from 'axios'
const API_URL = "http://localhost:8080/api/v1/";

var get_student_config = {
  url:API_URL + 'students',
  method: 'get',
  headers: { 
    'Authorization' : 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json' 
  }
}

const getAllStudents = () => {

  return axios(get_student_config);
};

//Get student By ID:
const getStudentById = (studentId) => {
  var get_student_by_id_config = {
    method: 'get',
    url: API_URL +`students/${studentId}`,
    headers: { 
      'Authorization': 'Bearer '+ localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  };
  return axios(get_student_by_id_config);
};


//Get student By Name:
const getStudentByName = (studentName) => {
  var get_student_by_name_config = {
    method: 'get',
    url: API_URL +`students/profile/${studentName}`,
    headers: { 
      'Authorization': 'Bearer '+ localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  };
  return axios(get_student_by_name_config);
};

//Delete Student
const deleteStudent = (id) => {
  console.log(id);
  var delete_student_config = {
    method: 'delete',
    url: API_URL +`students/${id}`,
    headers: { 
      'Authorization': 'Bearer '+ localStorage.getItem('token'),
      'Content-Type': 'application/json'
    }
  };
  return axios(delete_student_config);
};

const saveStudent = (data) => {
  console.log(data);
  var save_student_config = {
    method: 'post',
    url: API_URL + 'students',
    headers: { 
      'Authorization': 'Bearer '+ localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    data : data
  };

  return axios(save_student_config);
}; 


const updateStudent = (studentId,data) => {
  var update_student_config = {
    method: 'put',
    url: API_URL +`students/${studentId}`,
    headers: { 
      'Authorization': 'Bearer '+ localStorage.getItem('token'),
      'Content-Type': 'application/json'
    },
    data : data
  };
  return axios(update_student_config);
};


const StudentService = {
  getAllStudents,
  getStudentById,
  getStudentByName,
  saveStudent,
  updateStudent,
  deleteStudent,
  
}
export default StudentService;





























// import http from '../http'

// const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/students";   
// class StudentService{

//     getStudents() {
//         return axios.get(STUDENT_API_BASE_URL);
//     }
//     createStudent(student){
//         console.log('create metod',student)

//         var config = {
//             method: 'post',
//             url: 'http://localhost:8080/api/v1/students',
//             headers: { 
//               'Content-Type': 'application/json', 
//             //   'Authorization': 'Basic c2h1dm86YWJj', 
//             //   'Cookie': 'JSESSIONID=ACD05B3C5BA807B9C75C0050DD91D899'
//             },
//             data : student
//           };
          
//           axios(config)
//           .then(function (response) {
//             console.log(JSON.stringify(response.data));
//           })
//           .catch(function (error) {
//             console.log(error);
//           });


//         // return axios.post(STUDENT_API_BASE_URL,
//         //    {
//         //     headers: { 
//         //         'Content-Type': 'application/json', 
               
//         //       },
//         //   student
//         // });
//     }
// }
// export default new StudentService();