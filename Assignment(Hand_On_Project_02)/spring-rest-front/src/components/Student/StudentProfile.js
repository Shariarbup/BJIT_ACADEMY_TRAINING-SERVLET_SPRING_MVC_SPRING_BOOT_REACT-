import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import StudentService from '../../services/StudentService'


const StudentProfile = () => {

    const [student, setStudent] = useState({
        id: "",
        name: "",
        address: "",
        age: ""
    })
    const { studentName } = useParams()
    useEffect(() => {
        if (studentName) {
            StudentService
                .getStudentByName(studentName)
                .then((response) => {
                    console.log(response.data)
                    setStudent({
                        id: response.data.id,
                        name: response.data.name,
                        address: response.data.address,
                        age: response.data.age
                    });
                })
        }
    }, [studentName])
    return (
        <div className='container col-md-6 offset-md-3'>
            <div className="row">
                <div className="card " style={{ width: "400px" }}>
                    <img className="card-img-top" src="https://www.w3schools.com/howto/img_avatar.png" alt="Card image" />
                    <div className="card-body p-2">
                        <div className='row'>
                            <div className='col-md-6 h4'>ID: </div>
                            <div className='col-md-6' style={{ color: "red" }}>{student.id}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 h4'>Name:</div>
                            <div className='col-md-6' style={{ color: "red" }}>{student.name} </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 h4'>Address:</div>
                            <div className='col-md-6' style={{ color: "red" }}>{student.address}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 h4'>Age: </div>
                            <div className='col-md-6' style={{ color: "red" }}>{student.age}</div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 h4'>Role: </div>
                            <div className='col-md-6' style={{ color: "red" }}>{localStorage.getItem('roles').substring(5)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile