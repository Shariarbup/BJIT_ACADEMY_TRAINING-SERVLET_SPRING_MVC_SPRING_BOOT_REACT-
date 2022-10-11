import React, { Component, useState, useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate} from 'react-router-dom'
import StudentService from '../services/StudentService';
export default function HeaderComponent() {
    const studentName = localStorage.getItem('username')
    console.log("Student Name",studentName)
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container">
                    <a><Link className="navbar-brand" to='/students'>Student ERP</Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a ><Link className="nav-link" to='/students'>Home </Link></a>
                            </li>
                            {studentName === null ?

                            <li className="nav-item">
                                <a><Link  className="nav-link"  to='/login'>Login</Link></a>
                            </li> :
                            <li className="nav-item">
                                <a className="nav-link" style={{cursor:"pointer"}} onClick={()=>{
                                    localStorage.clear()
                                    window.location.href = "/login"
                                }}>Logout</a>
                            </li>
                            
                            }

                            {studentName !== null ?
                            <li className="navbar-item">
                               <a  ><Link className="nav-link" to={`/student/profile/${studentName}`}>Profile: <span style={{ color: "red"}}>{localStorage.getItem('username')}</span></Link> </a>
                            </li> : ""}

                            {studentName !== null ?
                            <li className="navbar-item">
                            <a className="nav-link"> Role: <span style={{ color: "red"}}>{localStorage.getItem('roles').substring(5)}</span></a>
                            </li>:""}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
