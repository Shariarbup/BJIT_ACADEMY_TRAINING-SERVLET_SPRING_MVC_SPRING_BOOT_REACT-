import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StudentService from '../../services/StudentService';

const Registration = () => {

    const [name, setStudentName] = useState("");
    const [address, setStudentAddress] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const { studentId } = useParams();

    const saveStudentForm = (e) => {
        e.preventDefault();

        const student = {
            name, address, age, password, studentId
        };
        if (studentId) {

            //update employee
            StudentService
                .updateStudent(studentId, student)
                .then((response) => {
                    console.log("Student data updated successfully", response.data);
                    navigate("/students");
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        } else {

            //create employee
            StudentService
                .saveStudent(student)
                .then((response) => {
                    console.log("Student added successfully", response.data);
                    navigate("/students");
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        }
    };

    useEffect(() => {
        if (studentId) {
            StudentService
                .getStudentById(studentId)
                .then((res) => {
                    console.log("Students by ID: ",res.data)
                    setStudentName(res.data.name)
                    setStudentAddress(res.data.address)
                    setAge(res.data.age)
                    setPassword(res.data.password)
                })
                .catch((error) => {
                    console.log("Something went wrong", error);
                });
        }
    }, [studentId]);

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 mt-3">
                    <h3 className='text-center mt-3'>Add New Student Form</h3>
                    <div className="card-body">
                        <div className="register-form">
                            <form>
                                <div className="form-group">
                                    <label>Username: </label>
                                    <input
                                        name="name"
                                        type="text"
                                        className='form-control'
                                        value={name}
                                        onChange={(e) => setStudentName(e.target.value)}
                                        placeholder="Enter Name"
                                        required
                                    />
                                </div> <br></br>
                                <div className="form-group">
                                    <label>Address: </label>
                                    <input
                                        name="address"
                                        type="text"
                                        className='form-control'
                                        value={address}
                                        onChange={(e) => setStudentAddress(e.target.value)}
                                        placeholder="Enter Address"
                                        required
                                    />
                                </div><br></br>
                                <div className="form-group">
                                    <label>Age: </label>
                                    <input
                                        name="age"
                                        type="text"
                                        className='form-control'
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        placeholder="Enter Age"
                                        required
                                    />
                                </div><br></br>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter Password"
                                        required
                                    />
                                </div><br></br>

                                <div className="mt-3">
                                    <button onClick={(e) => saveStudentForm(e)} className="btn btn-outline-success waves-effect btn-sm" style={{ marginRight: "5px" }}>
                                        Save
                                    </button>
                                    <Link to="/students" className="btn btn-outline-danger waves-effect btn-sm">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Registration