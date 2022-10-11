import React, { useState, useEffect } from 'react'
import StudentService from '../../services/StudentService'
import { Link } from 'react-router-dom'
const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const role = localStorage.getItem('roles')
    const init = () => {
        StudentService
            .getAllStudents()
            .then((response) => {
                console.log("Printing students data", response.data);
                setStudents(response.data);
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };
    useEffect(() => {
        init();
    }, []);

   
   
    const handleDeleteStudent = (id) => {
        console.log("Printing id", id);
        StudentService
            .deleteStudent(id)
            .then((response) => {
                console.log("Student deleted successfully", response.data);
                init();
            })
            .catch((error) => {
                console.log("Something went wrong", error);
            });
    };

    const roles = localStorage.getItem('roles');

    return (
        <div>
            <h2 className='text-center'>List Of Student</h2>
            <div className="container">
            { role === 'ROLE_ADMIN' ?  <a ><Link className='btn btn-primary' to='/add-student'> Add New Student</Link></a> : ""}<br /><br />
                <table className="table table-info table-striped table-hover table-bordered caption-top">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">ADDRESS</th>
                            { role === 'ROLE_ADMIN' ?
                            <th scope="col">AGE</th>
                            : ""}
                           { role === 'ROLE_ADMIN' ?
                            <th scope="col">ACTION</th>
                            : ""}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students?.map(
                                student =>
                                    <tr key={student?.id}>
                                        <td>{student?.id}</td>
                                        <td>{student?.name}</td>
                                        <td>{student?.address}</td>
                                        {role === 'ROLE_ADMIN' ?
                                        <td>{student?.age}</td>
                                        :""}
                                        {role === 'ROLE_ADMIN' ?(
                                        <td>

                                            <Link
                                                className="btn btn-outline-success waves-effect btn-sm" style={{ marginRight: "5px" }}
                                                to={`/student/edit/${student.id}`}
                                            >
                                                Update
                                            </Link> 
                                            <button
                                                className="btn btn-outline-danger waves-effect btn-sm"
                                                onClick={() => {
                                                    handleDeleteStudent(student.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                        )
                                        : ""}
                                          </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentsList